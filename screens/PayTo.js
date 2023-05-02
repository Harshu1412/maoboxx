import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import { Snackbar } from "react-native-paper";
import CustomOutlinedTextInput from "../components/CustomOutlinedTextInput"
import Titlebar from "../components/TitleBar";
import { AntDesign } from "@expo/vector-icons";
import Icon from "../components/Icon";
import SavedCard from "../features/SavedCard";
import NewCard from "../features/NewCard";
import { disableExpoCliLogging } from "expo/build/logs/Logs";

const ItemSelectionPage = () => {
  const [items, setItems] = useState();
  const getArticles = async () => {
    try {
      const response = await fetch(
        "http://192.168.1.30:3000/payment/list_payment_methods"
      );
      const json = await response.json();
      setItems(json.list.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getArticles();
    console.log(items);
  }, []);

  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [newItemName, setNewItemName] = useState("");
  const [number, setNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiry, setExpiry] = useState("");
  const [showNewItemForm, setShowNewItemForm] = useState(false);

  const [numberError, setNumberError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [cvvError, setCvvError] = useState(false);
  const [expiryError, setExpiryError] = useState(false);
  const [selectedMethod, setselectedMethod] = useState();
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [success, setSuccess] = useState(false);

  const payment = async () => {
    setSuccess(true);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pay_id: selectedMethod,
        amount: 20,
      }),
    };
    console.log(requestOptions.body);
    await fetch("http://192.168.1.30:3000/payment/pay", requestOptions)
      .then((response) => {
        response.json().then((data) => {
          if (response.status == 200) {
            console.log(data);
            setPaymentSuccess(true);
            setSuccess(true);
          } else if (response.status == 400) {
            console.log("errors");
            console.log(data);
          }
        });
        setSuccess(false);
      })
      .catch((err) => {
        console.log(response);
      });
  };

  const handleItemSelect = (itemId) => {
    const updatedItems = items.map((item) =>
      item.id === itemId
        ? (console.log(item.id),
          setselectedMethod(item.id),
          { ...item, selected: true })
        : { ...item, selected: false }
    );
    setItems(updatedItems);
  };

  const handleAddItem = async () => {
    // console.log(number, expiry, newItemName, cvv);
    if (number && expiry && newItemName && cvv) {
      const newItem = {
        id: items.length + 1,
        name: newItemName,
        selected: false,
        number,
        cvv,
        expiry,
      };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newItemName,
          email: "manindermatharu2001@gmail.com",
          number,
          expiry,
          cvv,
        }),
      };

      await fetch(
        "http://192.168.1.30:3000/payment/new_payment_method",
        requestOptions
      )
        .then((response) => {
          response.json().then((data) => {
            if (response.status == 200) {
              console.log(data);
            } else if (response.status == 402) {
              console.log("errors");
              console.log(data);
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
      // setItems([...items, newItem]);
      getArticles();
      setNewItemName("");
      setNumber("");
      setCvv("");
      setExpiry("");
      setShowNewItemForm(false);
    }
    if (number.length < 19) {
      setNumberError(true);
    }
    if (newItemName.length == 0) {
      setNameError(true);
    }
    if (newItemName != 0) {
      setNameError(false);
    }
    if (number.length == 19) {
      setNumberError(false);
    }
    if (cvv.length < 3) {
      setCvvError(true);
    }
    if (cvv.length == 3) {
      setCvvError(false);
    }
    if (expiry.length < 7) {
      setExpiryError(true);
    }
    if (expiry.length == 7) {
      setExpiryError(false);
    } else {
      setSnackbarVisible(true);
    }
  };

  const formatExpiryDate = (inputValue) => {
    const formattedValue = inputValue
      .replace(/\D/g, "")
      .match(/^(\d{1,2})(\d{0,4})/)
      .slice(1)
      .filter(Boolean)
      .join("/");
    setExpiry(formattedValue);
  };

  const handleExpiryDateChange = (inputValue) => {
    setExpiryError("");
    if (inputValue.length === 0) {
      setExpiry(null);
    } else {
      formatExpiryDate(inputValue);
    }
  };

  const formatCardNumber = (inputValue) => {
    setNumberError("");
    const formattedValue = inputValue.replace(/\s/g, "").match(/.{1,4}/g);

    if (formattedValue) {
      const joinedValue = formattedValue.join(" ");
      setNumber(joinedValue);
    }
  };

  return (
    <View style={{ flex: 1,backgroundColor:"white"}}>
      <Titlebar title={"Payment"} />
      <SavedCard />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => handleItemSelect(item.id)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginHorizontal: "5.5%",
              marginBottom: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{
                  height: 18,
                  width: 35,
                  borderRadius: 15,
                  marginRight: 12,
                }}
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1920px-Mastercard_2019_logo.svg.png",
                }}
              />
              <Text
                style={{ fontSize: 17, fontWeight: "500", marginRight: 10 }}
              >
                {item.card.brand}
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "500",
                  fontStyle: "italic",
                }}
              >
                XXXX {item.card.last4}
              </Text>
            </View>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 12,
                borderWidth: 2,
                borderColor: "#0C8A7B",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item.selected && (
                <View
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: "#0C8A7B",
                  }}
                />
              )}
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        onPress={() => setShowNewItemForm(true)}
        style={{
          marginHorizontal: "5%",
          fontSize: 15,
          fontWeight: "500",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", marginHorizontal: "2%" }}>
          <Icon />
          <Text style={{ fontSize: 15, fontWeight: "500", marginBottom: 10 }}>
            Add New Card
          </Text>
        </View>
        <AntDesign name="right" size={20} color="black" />
      </TouchableOpacity>
      <View
        style={{
          borderColor: "#D8D6D4",
          borderWidth: 2,
          marginHorizontal: "4.5%",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 8,
          marginBottom: 20,
          borderRadius: 8,
        }}
      >
        <Text style={{ fontWeight: "500", marginVertical: 5 }}>To pay</Text>
        <Text style={{ fontWeight: "400", marginVertical: 5 }}>$20</Text>
      </View>
      {!success ? (
        <TouchableOpacity
          onPress={() => payment()}
          style={{
            borderColor: "#D8D6D4",
            borderWidth: 2,
            marginHorizontal: "4.5%",
            justifyContent: "center",
            alignItems: "center",
            padding: 8,
            marginBottom: 20,
            borderRadius: 8,
            backgroundColor: "black",
          }}
        >
          <Text
            style={{ fontWeight: "500", color: "white", marginVertical: 5 }}
          >
            Make Payment
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          disabled={true}
          onPress={() => payment()}
          style={{
            borderColor: "#D8D6D4",
            borderWidth: 2,
            marginHorizontal: "4.5%",
            justifyContent: "center",
            alignItems: "center",
            padding: 8,
            marginBottom: 20,
            borderRadius: 8,
            backgroundColor: "black",
          }}
        >
          <Text
            style={{ fontWeight: "500", color: "white", marginVertical: 5 }}
          >
            Make Payment
          </Text>
        </TouchableOpacity>
      )}

      <Modal
        visible={showNewItemForm}
        onRequestClose={() => setShowNewItemForm(false)}
        transparent
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <NewCard />
            <CustomOutlinedTextInput
              label={"Card Number"}
              onChangeText={formatCardNumber}
              value={number}
              maxLen={19}
              width={330}
              keyboard={"numeric"}
            />
            {numberError ? (
              <Text style={{ color: "red" }}>Invalid Card Number</Text>
            ) : null}
            <CustomOutlinedTextInput
              label={"Card Holder Name"}
              onChangeText={(text) => {
                setNameError("");
                setNewItemName(text);
              }}
              value={newItemName}
              width={330}
              keyboard={"default"}
            />
            {nameError ? <Text style={{ color: "red" }}>Empty !!</Text> : null}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <View>
                <CustomOutlinedTextInput
                  label={"CVV"}
                  onChangeText={(text) => {
                    setCvv(text);
                    setCvvError("");
                  }}
                  value={cvv}
                  width={150}
                  maxLen={3}
                  keyboard={"numeric"}
                />
                {cvvError ? (
                  <Text style={{ color: "red" }}>Invalid CVV</Text>
                ) : null}
              </View>
              <View>
                <CustomOutlinedTextInput
                  label={"Expiry"}
                  onChangeText={handleExpiryDateChange}
                  value={expiry}
                  width={150}
                  maxLength={7}
                  keyboard={"numeric"}
                />
                {expiryError ? (
                  <Text style={{ color: "red" }}>Invalid Expiry</Text>
                ) : null}
              </View>
            </View>
            <TouchableOpacity
              onPress={() => handleAddItem()}
              style={{
                marginTop: 5,
                backgroundColor: "#0C8A7B",
                padding: 8,
                height: 48,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 8,
                marginBottom: 20,
              }}
            >
              <Text style={{ color: "white", fontWeight: "500", fontSize: 15 }}>
                Add Card
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Snackbar
          visible={snackbarVisible}
          onDismiss={() => setSnackbarVisible(false)}
          duration={3000}
        >
          Please fill out all fields correctly.
        </Snackbar>
      </Modal>
      <Snackbar
        visible={paymentSuccess}
        onDismiss={() => setPaymentSuccess(false)}
        duration={3000}
      >
        Payment Succesfull
      </Snackbar>
    </View>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
  },
});
export default ItemSelectionPage;
