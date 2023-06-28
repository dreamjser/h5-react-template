const MONEY_NUMS = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
const MONEY_DIGITS = ['', '拾', '佰', '仟']
const MONEY_BIGUNITS = ['', '万', '亿', '万亿', '仟兆']
const MONEY_SHOWNAME = ['分', '角', '元']
const MONEY_POSTFIX = '整'

export default {
  /**
   * @desc 格式化金额 -10000 => -10,000.00
   * @param {string/number} amount 金额
   * @returns
   */
  formatAmount(amount) {
    if (amount === '') {
      return '0.00'
    }

    amount = parseFloat(amount).toFixed(2).toString()

    return amount.replace(/-?(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  },
  /**
   * @desc 格式化卡号 6223700190025670393 =>6223 7001 9002 5670 393
   * @param {string} cardNo 卡号
   * @returns
   */
  formatCardNo(cardNo) {
    if (!cardNo) {
      return '--'
    }

    if (typeof cardNo === 'number') {
      cardNo = cardNo.toString()
    }

    return cardNo.replace(/(\d{4})(?=\d)/g, '$1 ')
  },
  /**
   * @desc 卡号脱敏 6223700190025670393 => 6223 **** **** 0393
   * @param {*} cardNo
   * @returns
   */
  encryptCardNo(cardNo) {
    if (!cardNo) {
      return '--'
    }

    if (typeof cardNo === 'number') {
      cardNo = cardNo.toString()
    }

    return cardNo.replace(/^(\d{4})\d+(\d{4})$/g, '$1 **** **** $2')
  },

  formatAmountUpper(n) {
    if (!n) {
      return ''
    }
    n = typeof n === 'string' ? n : n.toString()

    const arr = n.split('.')
    /**
     * 整数部分转换为中文金额表示
     * @param {string} cash 要转换的金额字符串
     * @returns {string} 转换后的金额字符串
     */
    const _convertIntegerToChineseCash = (cash) => {
      if (!cash) {
        return ''
      }
      let S = '' //返回值
      let p = 0 //字符位置指针
      let m = cash.length % 4 //取模

      // 四位一组得到组数
      let k =
        m > 0 ? Math.floor(cash.length / 4) + 1 : Math.floor(cash.length / 4)
      // 外层循环在所有组中循环
      // 从左到右 高位到低位 四位一组 逐组处理
      // 每组最后加上一个单位: "[万亿]","[亿]","[万]"
      for (let i = k; i > 0; i--) {
        let L = 4
        if (i == k && m != 0) {
          L = m
        }
        // 得到一组四位数 最高位组有可能不足四位
        let s = cash.substring(p, p + L)
        let l = s.length

        // 内层循环在该组中的每一位数上循环 从左到右 高位到低位
        for (let j = 0; j < l; j++) {
          let n = parseInt(s.substring(j, j + 1))
          if (n == 0) {
            if (
              j < l - 1 &&
              parseInt(s.substring(j + 1, j + 1 + 1)) > 0 && //后一位(右低)
              S.substring(S.length - 1, S.length) != MONEY_NUMS[n]
            ) {
              S += MONEY_NUMS[n]
            }
          } else {
            S += MONEY_NUMS[n]
            S += MONEY_DIGITS[l - j - 1]
          }
        }
        p += L
        // 每组最后加上一个单位: [万],[亿] 等
        if (i < k) {
          //不是最高位的一组
          if (parseInt(s, 10) != 0) {
            //如果所有 4 位不全是 0 则加上单位 [万],[亿] 等
            S += MONEY_BIGUNITS[i - 1]
          }
        } else {
          //处理最高位的一组,最后必须加上单位
          S += MONEY_BIGUNITS[i - 1]
        }
      }

      return S ? S + MONEY_SHOWNAME[2] : ''
    }

    /**
     * 小数部分转换为中文金额表示
     * @param {string} cash 要转换的金额字符串
     * @returns {string} 转换后的金额字符串
     */
    const _convertDecimalToChineseCash = (cash, integer) => {
      let returnCash = ''
      if (cash == '00') {
        returnCash = MONEY_POSTFIX
      } else {
        for (let i = 0; i < cash.length; i++) {
          if (i >= 2) {
            break
          }
          let intValue = parseInt(cash.charAt(i))
          switch (i) {
            case 0: {
              if (intValue != 0) {
                returnCash += MONEY_NUMS[intValue] + MONEY_SHOWNAME[1]
              } else if (parseInt(cash.charAt(i + 1)) && integer) {
                //0.01(零一分 -> 一分) 1.01(臺圆零一分)
                returnCash += MONEY_NUMS[intValue]
              }
              break
            }
            case 1: {
              if (intValue)
                returnCash += MONEY_NUMS[intValue] + MONEY_SHOWNAME[0] //如果最后一位为0则不显示
              break
            }
            default:
              break
          }
        }
      }

      return returnCash
    }

    let str = ''
    if (arr.length === 1) {
      str =
        _convertIntegerToChineseCash(arr[0]) +
        (parseFloat(arr[0]) === 0 ? '' : _convertDecimalToChineseCash('00', 2))
    } else {
      str = `${_convertIntegerToChineseCash(arr[0])}${
        arr[1] ? _convertDecimalToChineseCash(arr[1], 2) : ''
      }`
    }

    str = str.replace(/^零+/g, '')

    if (str === '整') {
      str = ''
    }

    return str
  },
}
