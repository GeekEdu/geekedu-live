declare namespace API {
  type LoginDto = {
    /** 手机号/邮箱 */
    username: string;
    /** 密码 */
    password: string;
    /** 验证码标识 */
    captchaId: string;
    /** 用户输入的验证码 */
    verifyCode: string;
  };
}
