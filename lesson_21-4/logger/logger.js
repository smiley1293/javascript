// import logger from './logger/index.js';
import {
   TYPE_LOG,
   TYPE_WARN,
   TYPE_ERROR
} from '../constant.js';




function logger(log, type = TYPE_LOG){
   console[type](log)
}
// logger('hey','warn')



export default logger;