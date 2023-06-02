import React, { Component } from "react";
import "./BT_DatVe.css";
import ThongTinGhe from "./ThongTinGhe";
import danhSachGheData from "../data/danhSachGhe.json";
import HangGhe from "./HangGhe";

export default class BT_DatVe extends Component {
  renderHangGhe = () => {
    return danhSachGheData.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };
  render() {
    return (
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url(./img/bgmovie.jpg)",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8" style={{ color: "white" }}>
                <h1 className="display-4 font-weight-bold mt-3">
                  Bài Tập Đặt Vé Xem Phim
                </h1>
                <div style={{ fontSize: "25px" }} className="mt-5">
                  Màn hình
                </div>

                <div
                  className="mt-1 "
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                >
                  <div className="screen"></div>
                </div>
                <div style={{ marginLeft: "155px" }}>
                  {this.renderHangGhe()}
                </div>
              </div>
              <div className="col-4">
                <div
                  className=" font-weight-bold"
                  style={{
                    color: "white",
                    fontSize: "40px",
                    marginTop: "150px",
                  }}
                >
                  Danh Sách Ghế
                </div>
                <div>
                  <ThongTinGhe />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
