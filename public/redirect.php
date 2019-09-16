<!DOCTYPE html>
<html lang="ja">
	<head>
		<title>Prizz | 懸賞まとめサイト</title>
		<meta charset="utf-8">
		<link rel="canonical" href="https://prizz.jp/">
		
<?php

  if(isset($_GET['to'])) {
      $to = $_GET['to'];
  }else{
			$to = "";
	}
	
	switch($to){
		case "line":
			$title = "なんでLINE@に誘導しようとするのか";
			$description = "懸賞好きなら、一度は読んでおいたほうがいいです。ちょっと怖い話です。";
			$to = "tips/tips_line";
			$picture = "tips_line";
			break;
		case "prize":
			$title = "300円をプレゼント！";
			$description = "1名様に300円が当たるプレゼント企画！9/12 23:59まで開催！";
			$to = "https://prizz.jp/twitter";
			$picture = "prize01.png";
			break;
		case "info":
			$title = "Maezawa | ヘルプ";
			$description = "Maezawaの使い方を分かりやすくまとめています！";
			$picture = "info";
			break;
		case "black-list":
			$title = "Maezawa | 懸賞詐欺ブラックリスト";
			$description = "詐欺報告があったアカウントをまとめています！詐欺アカウントをブロックしましょう！";
			$picture = "black-list";
			break;
		default: 
			$title = "300円をプレゼント！";
			$description = "1名様に300円が当たるプレゼント企画！9/12 23:59まで開催！";
			$to = "https://prizz.jp/twitter";
			$picture = "prize01.png";
	}

?>

		
		
		<meta http-equiv="refresh" content="0; URL=<?=$to ?>">
		 <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" /> <!-- カード種類 -->
    <meta name="twitter:site" content="@prizzjp" /> <!-- @ユーザー名 -->
    <meta property="og:url" content="http://prizz.jp" /> <!-- 記事のURL -->
    <meta property="og:title" content="<?=$title ?>" /> <!-- 記事のタイトル -->
    <meta property="og:description" content="<?=$description ?>" />
    <meta property="og:image" content="http://prizz.jp/assets/img/twitter-card/<?=$picture ?>" /> <!-- 画像のURL -->
		
		
		<style>
			html{
				background-color: white;
			}
			.icon{
				display: block;
				width:300px;
				margin: 100px auto 0 auto;
			}
			.loading{
				text-align: center;
			}
		</style>
		
	</head>
<body>
	<img class="icon" src="assets/img/head/apple-touch-icon.png">
	<p class="loading">LOADING...</p>
</body>
</html>