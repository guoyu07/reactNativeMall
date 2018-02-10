/*
 * @Author: yongqing
 * @Date:   2018-02-10 15:27:11
 * @Last Modified by:   yongqing
 * @Last Modified time: 2018-02-10 16:13:13
 */

'use strict';

import { fetchRequest } from '../utils/network';

const ENV = "";
const API_MALL = 'https://api-mall.etcchebao.com';

export const getList = ((params) => fetchRequest(`${API_MALL}/goods/detail`, 'GET', params));