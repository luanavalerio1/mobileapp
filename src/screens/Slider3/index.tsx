import React from "react";
import { FlatList, View, Image } from "react-native";
import { IPage } from "../../../App";
import {
  ComponentButtonSlider,
  ComponentListMarker,
  ComponentTitleSlider,
} from "../../components";
import { styles } from "./styles";

export function Slider3({ setPageI }: IPage) {
  const image1 = require("../../assets/slide5a.png");
  const image2 = require("../../assets/slide5b.png");
  const image3 = require("../../assets/slide5c.png");
  const slide3Texts = [{ id: "1", text: "Croissant", img: image1 },
  { id: "2", text: "Gyeran Ppang ",  img: image2 },
  { id: "3", text: "Ciabatta", img: image3 }];

  return (
    <>
    <View style={styles.container}>
      <View style={styles.panel}>
        <ComponentTitleSlider titleI="BREADS"   />
        <FlatList
          data={slide3Texts}
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