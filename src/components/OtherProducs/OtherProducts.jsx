import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const OtherProducts = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="flex flex-col items-center gap-7">
      <div className="flex items-center justify-center gap-10">
        <div>
          <img
            className="h-[400px] w-[400px]"
            src="https://scontent.fotp7-2.fna.fbcdn.net/v/t39.30808-6/308126257_2119162038271096_584836703695818679_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFbT0q-8EGQpDtbT1VUZNQT9nQFdg4byIr2dAV2DhvIiqi056o81ZWwWZY6LOOY6A9hH66iz9kv_d61AoruZJBk&_nc_ohc=vhxrFFrJsSwAX85bjKq&_nc_ht=scontent.fotp7-2.fna&oh=00_AfB-hP0UbOzIn4uMyPfHaSAagks-Z9E8bqCHBBf0sybEPg&oe=63FC3F1D"
            alt=""
          />
        </div>
        <div className="flex flex-col items-end">
          <p className="h-[300px] w-[800px] border-4 shadow-2xl"></p>
          <div className="mt-5">
            <div className="modal-pos">
              <Button onClick={toggleModal}>Contact Us</Button>

              {modal && (
                <div className="modal  ">
                  <div className=" modal-content flex flex-col items-center justify-center border-4 shadow-2xl">
                    <p>tell</p>
                    <p>mail</p>
                    <p>wapp</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-10">
        <div>
          <img
            className="h-[400px] w-[400px]"
            src="https://scontent.fotp7-2.fna.fbcdn.net/v/t39.30808-6/308126257_2119162038271096_584836703695818679_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFbT0q-8EGQpDtbT1VUZNQT9nQFdg4byIr2dAV2DhvIiqi056o81ZWwWZY6LOOY6A9hH66iz9kv_d61AoruZJBk&_nc_ohc=vhxrFFrJsSwAX85bjKq&_nc_ht=scontent.fotp7-2.fna&oh=00_AfB-hP0UbOzIn4uMyPfHaSAagks-Z9E8bqCHBBf0sybEPg&oe=63FC3F1D"
            alt=""
          />
        </div>
        <div className="flex flex-col items-end">
          <p className="h-[300px] w-[800px] border-4 shadow-2xl"></p>
          <div className="mt-5">
            <Button className="POPUP">Contact Us</Button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-10">
        <div>
          <img
            className="h-[400px] w-[400px]"
            src="https://scontent.fotp7-2.fna.fbcdn.net/v/t39.30808-6/308126257_2119162038271096_584836703695818679_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFbT0q-8EGQpDtbT1VUZNQT9nQFdg4byIr2dAV2DhvIiqi056o81ZWwWZY6LOOY6A9hH66iz9kv_d61AoruZJBk&_nc_ohc=vhxrFFrJsSwAX85bjKq&_nc_ht=scontent.fotp7-2.fna&oh=00_AfB-hP0UbOzIn4uMyPfHaSAagks-Z9E8bqCHBBf0sybEPg&oe=63FC3F1D"
            alt=""
          />
        </div>
        <div className="flex flex-col items-end">
          <p className="h-[300px] w-[800px] border-4 shadow-2xl"></p>
          <div className="mt-5">
            <Button>Contact Us</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherProducts;
