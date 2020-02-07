/* istanbul ignore file */
import React from "react";
import styled from "styled-components";

export const StarWarCardHeader = styled.div`
  background: #e3e3e3;
  font-family: inherit;
  font-size: 120%;
  font-weight: bold;
  border: 1px solid #e3e3e3;
  color: #000;
  padding: 0.2em 0.4em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: Comic Sans MS;
`;
export const StarWarCardContent = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 5px;
  color: #fff;
  font-family: Comic Sans MS;
`;
export const StarWarCardTitle = styled.div`
  padding: 0 5px;
  padding: 0 5px;
  color: #5d7fb9;
  font-family: Comic Sans MS;
`;
export const StarWarCardContainer = styled.div`
  display: flex;
`;
export const BodyContainer = styled.div`
  background: url(${() =>
    `${window.location.origin.toString()}/public/home.jpg`});
  background-attachment: fixed;
  min-height: 1000px;
`;
export const LoadingContainer = styled.div`
  text-align: center;
`;
export const HomePageLoadingContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
`;
export const CategoryContainer = styled.div`
  text-align: center;
  background: rgba(85, 85, 85, 0.8);
  color: white;
  font-size: 17px;
  font-weight: 600;
  padding-top: 8px;
  margin: 10px 0px;
  height: 40px;
`;
export const HeaderContainer = styled.div`
  padding-top: 70px;
`;
export const TitleContainer = styled.div`
  color: #fff;
  font-family: Comic Sans MS;
  font-size: 31px;
  padding: 20px 20px;
`;
export const HeaderTitle = styled.div`
  color: #5d7fb9;
  font-family: Comic Sans MS;
`;
export const HeaderContent = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #fff;
    font-family: Comic Sans MS;
`;
export const HeaderWrapper = styled.div`
  display: flex;
  margin-left: 20px;
`;
export const ErrorWrapper = styled.img`
  max-width: 200px;
  height: inherit;
`;