import Provide from '#/storybook/Provide'
import { storiesOf } from '@storybook/react'
import Home from '#/containers/connectHome'
import Category from '#/containers/connectCategory'
import Id from '#/containers/connectId'

storiesOf('Prizz', module)
  .add('Home', () => Provide(Home))
  .add('Category', () => Provide(Category))
  .add('Id', () => Provide(Id))
