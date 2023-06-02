import React, { Component } from "react";
import { connect } from "react-redux";
import { datGheAction } from "../redux/actions/BT_DatVeAction";
class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      // if (index === 0) {
      //   return <span className="rowNumber">{ghe.soGhe}</span>;
      // }
      let cssGheDaDat = "";
      let disabled = false;
      // ghế đã đặt
      if (ghe.daDat) {
        cssGheDaDat = `gheDuocChon`;
        disabled = true;
      }
      //  xét trạng thái ghế đang đặt
      let cssGheDangDat = ``;
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
      );
      console.log("indexGheDangDat", indexGheDangDat);
      if (indexGheDangDat !== -1) {
        cssGheDangDat = `gheDangChon`;
      }
      return (
        <button
          onClick={() => {
            this.props.datGhe(ghe);
          }}
          disabled={disabled}
          key={index}
          className={`${cssGheDaDat} ${cssGheDangDat} ghe font-weight-bold `}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };

  renderSoHang = () => {
    return (
      <span className="rowNumber">
        {this.props.hangGhe.danhSachGhe.map((hang, index) => {
          return (
            <button disabled={true} className="rowNumber">
              {hang.soGhe}
            </button>
          );
        })}
      </span>
    );
  };
  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return (
        <div>
          {this.props.hangGhe.hang}
          {this.renderSoHang()}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.hangGhe.hang}
          {this.renderGhe()}
        </div>
      );
    }
  };
  render() {
    return (
      <div
        style={{ color: "white", fontSize: 30 }}
        className="text-left mt-3 ml-5 font-weight-bold"
      >
        {this.renderHangGhe()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    datGhe: (ghe) => {
      dispatch(datGheAction(ghe));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
