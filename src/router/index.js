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
import MockDemo from '@/Useing/MockDemo';
import CSS3Demo from '@/Useing/CSS3Demo';
import CssFlexLayout from '@/Useing/CssFlexLayout';
import CssMediaQuery from '@/Useing/CssMediaQuery';
import FileUpload from '@/Useing/FileUpload';
import DayJs from '@/Useing/DayJs';
import Loading from "@/components/Loading.vue"
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
    {
      path: '/MockDemo',
      name: 'MockDemo',
      component: MockDemo
    },
    {
      path: '/CSS3Demo',
      name: 'CSS3Demo',
      component: CSS3Demo
    },
    {
      path: '/CssFlexLayout',
      name: 'CssFlexLayout',
      component: CssFlexLayout 
    },
    {
      path: '/CssMediaQuery',
      name: 'CssMediaQuery',
      component: CssMediaQuery 
    },
    {
      path: '/FileUpload',
      name: 'FileUpload',
      component: FileUpload 
    },
    {
      path: '/loading',
      name: 'Loading',
      component: Loading 
    },
    {
      path: '/DayJs',
      name: 'DayJs',
      component: DayJs 
    },

  ]
})
