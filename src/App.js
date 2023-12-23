/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";
import shortid from "shortid";
import Block from "./components/Block.js";
import TitleBlockList from "./components/TitleBlockList.js";
import List from "./components/List.js";
import ListItem from "./components/ListItem.js";
import Teaser from "./components/Teaser.js";
import Stocks from "./components/Valuta.js";
import Search from "./components/Search.js";
import Banner from "./components/Banner.js";
import Weather from "./components/Weather.js";

import * as Constant from "./components/Constants.js"

function App() {
  return (
    <React.Fragment>
      <Block className="top-block">
        <Block className="news">
          <TitleBlockList items={Constant.titleNews}>
            <span className="date">31 июля, среда 02 32</span>
          </TitleBlockList>
          <List>
            {Constant.listNews.map((item) => (
              <ListItem key={shortid.generate()} item={item} />
            ))}
          </List>
          <List>
            {Constant.valuta.map((item) => (
              <Stocks key={shortid.generate()} item={item} />
            ))}
          </List>
        </Block>
        <Block className="teaser">
          <Teaser {...Constant.dataTeaser} />
        </Block>
      </Block>
      <Block className="search">
        {Constant.searchLink.map((item) => (
          <a key={shortid.generate()} href="#">
            {item}
          </a>
        ))}
        <Search />
        <span>
          Найдется всё. Например,{" "}
          <span className="exa-searche">фазы луны сегодня</span>
        </span>
      </Block>
      <Block className="banner">
        <Banner {...Constant.dataBanner} />
      </Block>
      <Block className="columns">
        <Block className="col-4">
          <Block className="weather">
            <TitleBlockList
              items={[
                {
                  href: "#",
                  text: "Погода",
                },
              ]}
            />
            <Weather />
          </Block>
          <Block className="visited">
            <TitleBlockList
              items={[
                {
                  href: "#",
                  text: "Посещаемое",
                },
              ]}
            />
            <List>
              {Constant.dataVisited.map((item) => (
                <ListItem key={shortid.generate()} item={item}>
                  {item.text}
                </ListItem>
              ))}
            </List>
          </Block>
        </Block>
        <Block className="col-4">
          <Block className="maps">
            <a href="#">Карта Германии</a>
            <p>Расписания</p>
          </Block>
          <Block className="tv">
            <TitleBlockList
              items={[
                {
                  href: "#",
                  text: "Телепрограмма",
                },
              ]}
            >
              <span className="tv-show">Эфир</span>
            </TitleBlockList>
            <List>
              {Constant.tvProgramm.map((item) => (
                <ListItem key={shortid.generate()} item={item}>
                  {item.text}
                </ListItem>
              ))}
            </List>
          </Block>
        </Block>
        <Block className="col-4">
          <Block className="stream">
            <TitleBlockList
              items={[
                {
                  href: "#",
                  text: "Эфир",
                },
              ]}
            />
            <List>
              {Constant.dataStream.map((item) => (
                <ListItem key={shortid.generate()} item={item}>
                  {item.text}
                </ListItem>
              ))}
            </List>
          </Block>
        </Block>
      </Block>
    </React.Fragment>
  );
}

export default App;