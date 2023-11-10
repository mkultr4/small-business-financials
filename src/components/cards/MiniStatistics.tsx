// Chakra imports
// Chakra imports
import {
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
// Custom components

// Custom icons
import React, { useMemo } from "react";
import Card from './Card';

interface MiniStatisticsProps {
  startContent?: JSX.Element;
  endContent?: JSX.Element;
  name?: string;
  growth?: number;
  value?: string;
}
export default function MiniStatistics({ startContent, endContent, name, growth, value }: MiniStatisticsProps): JSX.Element {

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "secondaryGray.600";
  const renderGrowth = useMemo(() => {
    if (!growth) {
      return null;
    }
    if (growth === 0) {
      return null;
    }
    const value = Math.abs(growth).toLocaleString();
    const color = growth > 0 ? 'green.500' : 'red.500';
    const symbol = growth > 0 ? '+' : '-';
    return (
      <Flex align='center'>
        <Text color={color} fontSize='xs' fontWeight='700' me='5px'>
          {symbol}{value}
        </Text>
        <Text color='secondaryGray.600' fontSize='xs' fontWeight='400'>
          since last month
        </Text>
      </Flex>
    );
  }, [growth]);
  return (
    <Card py='15px'>
      <Flex
        my='auto'
        h='100%'
        align={{ base: "center", xl: "start" }}
        justify={{ base: "center", xl: "center" }}>
        {startContent}

        <Stat my='auto' ms={startContent ? "18px" : "0px"}>
          <StatLabel
            lineHeight='100%'
            color={textColorSecondary}
            fontSize={{
              base: "sm",
            }}>
            {name}
          </StatLabel>
          <StatNumber
            color={textColor}
            fontSize={{
              base: "2xl",
            }}>
            {value}
          </StatNumber>
          {renderGrowth}
        </Stat>
        <Flex ms='auto' w='max-content'>
          {endContent}
        </Flex>
      </Flex>
    </Card>
  );
}
