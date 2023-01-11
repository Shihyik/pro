import './Register.css'

function Register() {
  return (
    <>
      <div className="text-center fw-bold h4">會員註冊</div>
      <div className="middle">
        <div>
          <label>帳號</label>
          <br />
          <input className="form-control" />
        </div>
        <div>
          <label>E-mail</label>
          <br />
          <input className="form-control" />
        </div>
        <div>
          <label>密碼</label>
          <br />
          <input className="form-control" />
        </div>
        <div>
          <label>再次輸入密碼</label>
          <br />
          <input className="form-control" />
        </div>
        <div>
          <label>行動電話</label>
          <br />
          <input className="form-control" />
        </div>
        <div>
          <label>郵遞區號</label>
          <br />
          <input className="form-control" />
        </div>
        <div>
          <label>地址</label>
          <br />
          <input className="form-control" />
        </div>
        <div>
          <label>生日(確定後不可修改)</label>
          <br />
          <input className="form-control" />
        </div>
        <div>
          是否接受優惠訊息
          <button className="btn btn-warning m-2">是</button>
          <button className="btn btn-secondary m-2">否</button>
        </div>
        <div>
          <input type="checkbox" />
          我同意接收 電競人 的最新消息、優惠及服務推廣相關資訊
        </div>
        <div>
          <input type="checkbox" />
          我同意網站隱私權政策及服務條款
        </div>
        <div>
          <button className="btn btn-danger form-control">註冊</button>
        </div>
      </div>
    </>
  )
}

export default Register
