import Provide from '#/storybook/Provide'
import { storiesOf } from '@storybook/react'
import Home from '#/components/Home/connectHome'
import Category from '#/components/Category/connectCategory'
import Id from '#/components/Id/connectId'

storiesOf('Prizz', module)
  .add('Home', () => Provide(Home))
  .add('Category', () => Provide(Category))
  .add('Id', () => Provide(Id))
