import './VertifyToSeller.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

function VertifyToSeller() {
  return (
    <>
      <div className="text-center fw-bold h4">驗證成賣家</div>
      <div className="d-flex body-frame">
        <div className="left">
          <div>
            <FontAwesomeIcon icon={faHouse} /> 
            首頁/會員中心/驗證成賣家
          </div>
          <div>
            <ul className="leftside">
              <li>
                <a href="#" className="text-dark">
                  會員中心
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  我的訂單
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  優惠券
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  聊天室
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  購物車
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  評價總覽
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  收藏清單
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mid">
          <div>
            <label>帳號</label>

            <input className="form-control" />
          </div>
          <div>
            <label>賣場名稱</label>

            <input className="form-control" />
          </div>
          <div>
            <label>統一編號</label>
            <input className="form-control" />
          </div>
          <div>
            <label>賣場簡介</label>
            <textarea className="form-control"></textarea>
          </div>
          <div>
            <button className="btn btn-danger form-control mt-4">驗證</button>
          </div>
        </div>
        <div className="right">
          <div className="right-mid">
            {' '}
            <div className="circle"></div>
          </div>

          <div className="text-center">Jodie</div>
          <div className="text-center">認證狀態：買家</div>
        </div>
      </div>
    </>
  )
}

export default VertifyToSeller
