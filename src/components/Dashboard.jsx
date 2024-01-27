import React, { useEffect, useState } from "react";
import { Sidebar } from "flowbite-react";
import "../css/dashboard.css"
import axios from "axios";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
} from "react-icons/hi";

function Dashboard(props) {

return (
    <div>
        <Sidebar className="sidebar" aria-label="Sidebar with multi-level dropdown example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={HiChartPie} className="active">
                Dashboard
              </Sidebar.Item>
              <Sidebar.Collapse icon={HiShoppingBag} label="Features">
                <Sidebar.Item href="room">Rooms</Sidebar.Item>
                <Sidebar.Item href="resturent">Resturent</Sidebar.Item>
                <Sidebar.Item href="review">Reviews and Rating</Sidebar.Item>
                <Sidebar.Item href="commiunication">Commiunication Forum</Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Item href="#" icon={HiInbox}>
                Booking Details
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiArrowSmRight}>
                Log Out
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
  );
}

export default Dashboard;
