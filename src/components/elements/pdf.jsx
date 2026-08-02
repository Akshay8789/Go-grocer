import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetOrder from "../firestore.operations.files/getorder.js";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import logo from "../../images/GoGrocers.png";
function PDF() {
  const { orderid } = useParams();
  const [order, setOrder] = useState({ orderdetail: [] });
  const [address, setAddress] = useState({});
  const currentDate = new Date();
  async function Get_Order(orderid) {
    const uid = localStorage.getItem("uid");
    try {
      const orderdata = await GetOrder(uid);
      for (let i of orderdata.completed) {
        if (i.id === orderid) {
          setOrder(i);
          setAddress(i.deliveryaddress);
          console.log("log order");
          console.log(i);
        }
      }
    } catch (err) {
      console.error("Error fetching order data:", err);
    }
  }

  const formatOrderTime = (ordertime) => {
    if (ordertime instanceof Date) {
      return ordertime.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });
    } else if (ordertime && ordertime.toDate) {
      const orderTime = ordertime.toDate();
      return orderTime.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });
    } else {
      return "Invalid Date";
    }
  };

  useEffect(() => {
    Get_Order(orderid);
  }, [orderid]);

  const downloadPdf = async () => {
    window.print();
  };

  return (
    <>
      <MyDocument
        order={order}
        address={address}
        currentDate={currentDate}
        formatOrderTime={formatOrderTime}
      />
      <button
        onClick={downloadPdf}
        className="checkoutbutton"
        id="downloadpdf"
      >
        {" "}
        click to download{" "}
      </button>
    </>
  );
}

const MyDocument = ({ order, address, currentDate, formatOrderTime }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <Text style={styles.heading}>GoGrocers Order ID: {order.id}</Text>
        <Text style={styles.date}>{formatOrderTime(currentDate)}</Text>
        <br />
        <img src={logo} alt="Logo" style={styles.logo} />
        <br />
      </View>
      <View style={styles.mainsection}>
        <Text>Order placed: {formatOrderTime(order.ordertime)}</Text>
        <Text>Order placed: {order.id}</Text>
        <Text>Order total: Rs {order.totalPrice}</Text>
      </View>
      <hr style={styles.line} />
      <View style={styles.section}>
        <Text style={styles.subheading}>ORDER DETAILS</Text>
        <hr style={styles.line} />
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableCellheader}>Item</Text>
            <Text style={styles.tableCellheader}>Quantity</Text>
            <Text style={styles.tableCellheader}>Price</Text>
          </View>
          {order.orderdetail.map((item, index) => (
            <View style={styles.tableRow} key={index}>
              <Text style={styles.tableCell}>{item.name}</Text>
              <Text style={styles.tableCell}>
                {item.frequency} units each {item.weight}
              </Text>
              <Text style={styles.tableCell}>
                ₹ {item.priceint * item.frequency} /-
              </Text>
            </View>
          ))}
        </View>
        <hr style={styles.line} />
        <View style={styles.mainsection}>
          <Text>Delivery Address</Text>
          <Text>
            {address.name}, {address.phonenumber}
          </Text>
          <Text>{address.street}</Text>
          <Text>
            {address.city}, {address.state}
          </Text>
        </View>
        <hr style={styles.line} />
        <Text style={styles.subheading}>Payment Method : COD</Text>
      </View>
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    margin: 20,
  },
  line: {
    width: 90,
    alignSelf: "center",
    height: "1pt",
    backgroundColor: "black",
    opacity: "25%",
    marginBottom: 10,
    marginLeft: 40,
    marginTop: 10,
    marginRight: 0,
  },
  logo: {
    marginLeft: 50,
    marginTop: 20,
    width: 170,
    height: 50,
    marginBottom: 40,
  },
  mainsection: {
    marginLeft: 40,
    display: "flex",
    flexDirection: "column",
  },
  heading: {
    fontSize: 20,
    fontWeight: 500,
    marginBottom: 10,
    position: "absolute",
    top: 10,
    left: "50%",
  },
  date: {
    fontSize: 15,
    fontWeight: 500,
    marginBottom: 10,
    position: "absolute",
    top: 10,
    left: 40,
  },
  subheading: {
    fontSize: 15,
    fontWeight: 500,
    marginBottom: 20,
    marginLeft: 40,
    marginTop: 20,
    marginRight: 0,
  },
  table: {
    width: "100%",
    marginBottom: 20,
    marginLeft: 40,
    marginTop: 20,
    marginRight: 0,
    display: "flex",
    flexDirection: "column",
  },
  tableRow: {
    display: "flex",
    flexDirection: "row",
  },
  tableCell: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    height: 25,
    width: 25,
  },
  tableCellheader: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    height: 25,
    width: 25,
    fontWeight: 600,
  },
});

export default PDF;
