import './Login.css'


function Register() {
  return (
    <>
      <div className="login fw-bold">會員登入</div>
      <div className="middle form">
        <div>
          <label>帳號</label>
          <br />
          <input className="form-control" />
        </div>
        <div>
          <label>帳號</label>
          <br />
          <input className="form-control" />
        </div>
        <div>
          <input type="checkbox" />
          記住我
        </div>
        <div>
          <button className="btn form-control btn-warning">登入</button>
        </div>
        <div>
          <button className="btn form-control  btn-primary">
            使用FACEBOOK登入
          </button>
        </div>
        <div>
          <button className="btn form-control btn-danger">
            使用GOOGLE登入
          </button>
        </div>
        <div className="text-center">
          <a
            href="#"
            className=" text-decoration-none text-dark

"
          >
            免費註冊會員
          </a>
          |
          <a
            href="#"
            className=" text-decoration-none text-dark

"
          >
            忘記密碼
          </a>
        </div>
      </div>
    </>
  )
}

export default Register
