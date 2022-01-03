import React, { FC } from "react";
import GoogleMapReact from "google-map-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const location = {
  address: "Tiraspol 3300, Moldova",
  lat: 46.844137,
  lng: 29.613994,
};
export const Map = () => (
  <Wrapper>
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyDrEWOIhhdDXpaOMaPVsHqnf7AOreDZ0OY" }}
      defaultCenter={location}
      defaultZoom={12}
    >
      <LocationPin text={location.address} />
    </GoogleMapReact>
  </Wrapper>
);

const LocationPin: FC<{ text: string }> = ({ text }) => {
  return (
    <Pin>
      <PinIcon />
      <p>{text}</p>
    </Pin>
  );
};
const PinIcon = styled(FontAwesomeIcon).attrs({ icon: faMapMarkerAlt })`
  color: ${({ theme }) => theme.color.red};
  font-size: 38px;
`;

const Pin = styled.div`
  display: flex;
  gap: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
`;
