import React from "react";
// Chakra UI
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';

// Custom Components
import { createColumnHelper } from '@tanstack/react-table';
import { DataTable } from '../tables/DataTable';

import MainMenu from '../menu/MainMenu';
import Card from '../cards/Card';


type UnitConversion = {
    fromUnit: string;
    toUnit: string;
    factor: number;
};

const data: UnitConversion[] = [
    {
        fromUnit: "inches",
        toUnit: "millimetres (mm)",
        factor: 25.4
    },
    {
        fromUnit: "feet",
        toUnit: "centimetres (cm)",
        factor: 30.48
    },
    {
        fromUnit: "yards",
        toUnit: "metres (m)",
        factor: 0.91444
    }
];

const columnHelper = createColumnHelper<UnitConversion>();

const columns = [
    columnHelper.accessor("fromUnit", {
        cell: (info) => info.getValue(),
        header: "To convert"
    }),
    columnHelper.accessor("toUnit", {
        cell: (info) => info.getValue(),
        header: "Into"
    }),
    columnHelper.accessor("factor", {
        cell: (info) => info.getValue(),
        header: "Multiply by",
        meta: {
            isNumeric: true
        }
    })
];
export default function CheckTable(): JSX.Element {


    const textColor = useColorModeValue("secondaryGray.900", "white");


    return (
        <Card
            flexDirection='column'
            w='100%'
            px='0px'
            overflowX={{ sm: "scroll", lg: "hidden" }}>
            <Flex px='25px' justify='space-between' align='center'>
                <Text
                    color={textColor}
                    fontSize='22px'
                    fontWeight='700'
                    lineHeight='100%'>
                    Check Table
                </Text>
                <MainMenu />
            </Flex>
            <DataTable columns={columns} data={data} />
        </Card>

    );
}
