import React from "react";
import { FlatList, View, Image } from "react-native";
import { IPage } from "../../../App";
import {
  ComponentButtonSlider,
  ComponentListMarker,
  ComponentTitleSlider,
} from "../../components";
import { styles } from "./styles";

export function Slider1({ setPageI }: IPage) {
  const image1 = require("../../assets/imagem1.png");
  const image2 = require("../../assets/imagem2.png");
  const image3 = require("../../assets/slide3c.png");
  const slide1Texts = [{ id: "1", text: "Iced Coffee Cocktail", img: image1 },
  { id: "2", text: "Vietnamese Iced Coffee",  img: image2 },
  { id: "3", text: "Iced Coffee", img: image3 }];

  return (
    <>
    <View style={styles.container}>
      <View style={styles.panel}>
        <ComponentTitleSlider titleI="COFFES"   />
        <FlatList
          data={slide1Texts}
          renderItem={({ item }) => (
            <ComponentListMarker key={item.id} textMarker={item.text} image={item.img} />
            
          )}
        />
      </View>
      <View style={styles.button}>
            <ComponentButtonSlider onPressI={() => setPageI(1)} />
            <ComponentButtonSlider onPressI={() => setPageI(2)} />
            <ComponentButtonSlider onPressI={() => setPageI(3)} />
            <ComponentButtonSlider onPressI={() => setPageI(4)} />
            <ComponentButtonSlider onPressI={() => setPageI(5)} />
      </View>
    </View>
    </>
  );
}