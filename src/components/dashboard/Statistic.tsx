import React, { useMemo } from 'react';

// Chakra imports
import { Avatar, Flex, FormLabel, Icon, Select, useColorModeValue } from '@chakra-ui/react';

// Custom Components
import MiniStatistics from '../cards/MiniStatistics';
import IconBox from '../icons/IconBox';

// Assets
import { MdAddTask, MdAttachMoney, MdFileCopy } from 'react-icons/md';
import Usa from "../../assets/img/usa.png";

// Types
import { Statistic as StatisticType } from '../../api/types';

// Icons
const BoxIcons = {
    'Earnings': MdAttachMoney,
    'Clients': MdAttachMoney,
    'Sales': null,
    'Balance': null,
    'Tasks': MdAddTask,
    'Projects': MdFileCopy
};




export default function Statistic({ name, value, growth }: StatisticType) {

    const brandColor = useColorModeValue("brand.500", "white");
    const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
    const icon = BoxIcons[name] ?? null;
    const bgColor = name === 'Tasks' ? 'linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)' : boxBg;
    const color = name === 'Tasks' ? 'white' : brandColor;

    const renderEndContent = useMemo(() => {
        if (name !== 'Balance') {
            return undefined;
        }
        return (
            <Flex me='-16px' mt='10px'>
                <FormLabel htmlFor='balance'>
                    <Avatar src={Usa} />
                </FormLabel>
                <Select
                    id='balance'
                    variant='mini'
                    mt='5px'
                    me='0px'
                    defaultValue='usd'>
                    <option value='usd'>USD</option>
                    <option value='eur'>EUR</option>
                    <option value='gba'>GBA</option>
                </Select>
            </Flex>
        );
    }, [name]);

    return (
        <MiniStatistics
            startContent={
                icon ? (
                    <IconBox w='56px' h='56px' bg={bgColor} icon={<Icon w='32px' h='32px' as={icon} color={color} />} />
                ) : undefined
            }
            endContent={renderEndContent}
            name={name}
            value={value.toLocaleString()}
            growth={growth}
        />
    );
};
