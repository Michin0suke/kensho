#『crond: can't lock /var/run/crond.pid, otherpid may be 1234: リソースが一時的に利用できません』の解決方法

ネット上の情報で解決できなかったので、同じ境遇の人のためにここに残しておきます。

```
$ cat /etc/redhat-release 
CentOS Linux release 7.6.1810 (Core) 
```



## 遭遇したエラー

`crond start`や`crond status`すると、`crond: can't lock /var/run/crond.pid, otherpid may be 1234: リソースが一時的に利用できません`と表示されてめちゃくちゃムカつく。



## ネット上の情報

このエラーは珍しくもない様で、検索するとたくさん出てくる。しかし、検索して出てくる解決方法はほぼ全て以下の様な方法。

1. `rm /var/run/crond.pid`で削除。
2. `ps ax | grep crond`を実行して出てくるcrondのプロセスを全て`kill`する。

3. `crond start`で起動。

実際、これでほとんどの人は解決している様なので試してない人は是非試してみてほしい。けど、僕の場合はどんな順番でPIDを削除しcrondを起動しようがずっと

`crond: can't lock /var/run/crond.pid, otherpid may be 1234: リソースが一時的に利用できません`

`crond: can't lock /var/run/crond.pid, otherpid may be 1234: リソースが一時的に利用できません`

`crond: can't lock /var/run/crond.pid, otherpid may be 1234: リソースが一時的に利用できません`

と表示され続けた。３時間もそれは続いた。



## 解決方法

1. とりあえずすでにあるプロセスとPIDファイルは消す。
2. `systemctl start crond`する。

ポイントは`crond start`や`crond status`をしないこと。`crond start`や`crond status`をすると`リソースが一時的に利用できません`になるという単純な話だった。



## これでも解決しなかったら

プロセスのリミットが原因の場合、`/etc/security/limits.conf`に

`root	-	nproc	unlimited`

を追加したら解決した、みたいな記事を見かけた。
僕はこの方法で解決しなかったがもしかしたらこれで解決するかも。