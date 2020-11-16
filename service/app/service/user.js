/*
 * @Author: liudong
 * @Date: 2020-11-11 10:04:41
 * @version: 模块版本
 * @Description: 必要描述
 * @FilePath: \movie-api\app\service\user.js
 * @param: {Object} [title] - 参数说明
 * @method: [FunctionName] - 方法说明
 * @LastEditors: liudong
 * @LastEditTime: 2020-11-16 16:25:58
 */
const Service = require('egg').Service;
const bcrypt = require('bcryptjs')

class UserService extends Service {
  async register(params) {
    const { userName, email, password } = params;
    const Literal = this.app.mysql.literals.Literal;
    const result = await this.app.mysql.insert('user', {
      id: new Literal('UUID_SHORT()'),
      userName,
      email,
      password: this.encrypt(password)
    })
    return result.affectedRows > 0;
  }

  async login(params) {
    const { email, password } = params;
    const result = await this.app.mysql.select('user', {
      where: { email }
    })
    const { password: encryptPass } = result[0];
    console.log('result: ', result[0]);
    if (this.comparePassword(password, encryptPass)) {
      return result[0];
    }
    return false;
  }

  async checkEmail(email) {
    const result = await this.app.mysql.select('user', {
      where: { email }
    })
    return result.length > 0
  }

  async getInfo(id) {
    const result = await this.app.mysql.select('user', {
      where: { id },
      columns: ['email', 'userName']
    });
    return result[0];
  }

  encrypt(password) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash
  }

  comparePassword(password, encryptPass) {
    return bcrypt.compareSync(password, encryptPass)
  }
}

module.exports = UserService;