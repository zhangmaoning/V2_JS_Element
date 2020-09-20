import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Useing/Home';
import LifeCycle from '@/Useing/LifeCycle';
import TodoList from '@/Useing/TodoList';
import Vuex from '@/Useing/Vuex';
import Move from '@/Useing/MoveSlicksort'
import Move2 from '@/Useing/MoveAwednd'
import DataArray from '@/Useing/DataArray'
import Slot from '@/Useing/Slot'
import TableComponentUser from '@/Useing/TableData';
import FormComponentUser from '@/Useing/FormData';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/LifeCycle',
      name: 'LifeCycle',
      component: LifeCycle
    },
    {
      path: '/TodoList',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/TableComponentUser',
      name: 'TableComponentUser',
      component: TableComponentUser
    },
    {
      path: '/Vuex',
      name: 'Vuex',
      component: Vuex
    },
    {
      path: '/MoveSlicksort',
      name: 'Move',
      component: Move
    },
    {
      path: '/MoveAwednd',
      name: 'Move2',
      component: Move2
    },
    {
      path: '/MoveAwednd',
      name: 'Move2',
      component: Move2
    },
    {
      path: '/DataArray',
      name: 'DataArray',
      component: DataArray
    },
    {
      path: '/Slot',
      name: 'Slot',
      component: Slot
    },
    {
      path: '/FormComponentUser',
      name: 'FormComponentUser',
      component: FormComponentUser
    },

  ]
})
