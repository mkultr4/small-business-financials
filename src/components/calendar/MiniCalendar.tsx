import React, { useState } from "react";

// Chakra imports
import { Text, Icon } from "@chakra-ui/react";

// Custom components
import Card from '../cards/Card';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../assets/css/MiniCalendar.css";

// Assets
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

interface MiniCalendarProps {
    selectRange: boolean;
}

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function MiniCalendar({ selectRange }: MiniCalendarProps): JSX.Element {

    const [value, onChange] = useState<Value>(new Date());
    return (
        <Card
            alignContent='center'
            flexDirection='column'
            w='100%'
            maxW='max-content'
            p='20px 15px'
            h='max-content'
        >
            <Calendar
                onChange={onChange}
                value={value}
                selectRange={selectRange}
                view={"month"}
                tileContent={<Text color='brand.500'></Text>}
                prevLabel={<Icon as={MdChevronLeft} w='24px' h='24px' mt='4px' />}
                nextLabel={<Icon as={MdChevronRight} w='24px' h='24px' mt='4px' />}
            />
        </Card>
    );
}
