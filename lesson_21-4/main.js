// *Modules: Import / Export
import logger from './logger/logger.js';
import {TYPE_LOG, TYPE_WARN, TYPE_ERROR} from './constant.js';

logger('Test',TYPE_WARN);

// khi import "..." thì import từ file export default
// import tất cả dựa tre alias
// import * as constants from './constants.js'