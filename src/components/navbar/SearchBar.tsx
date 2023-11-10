import React, { useState } from "react";
import {
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
export function SearchBar(): JSX.Element {

    // Chakra Color Mode
    const searchIconColor = useColorModeValue("gray.700", "white");
    const inputBg = useColorModeValue("secondaryGray.300", "navy.900");
    const inputText = useColorModeValue("gray.700", "gray.100");
    const [search, setSearch] = useState('');
    return (
        <InputGroup w={{ base: "100%", md: "200px" }} >
            <InputLeftElement
                children={
                    <IconButton
                        aria-label='Search'
                        bg='inherit'
                        borderRadius='inherit'
                        _hover={{
                            boxShadow: "none",
                        }}
                        _active={{
                            bg: "inherit",
                            transform: "none",
                            borderColor: "transparent",
                        }}
                        _focus={{
                            boxShadow: "none",
                        }}
                        icon={
                            <SearchIcon color={searchIconColor} w='15px' h='15px' />
                        }></IconButton>
                }
            />
            <Input

                variant='search'
                fontSize='sm'
                bg={inputBg}
                color={inputText}
                fontWeight='500'
                _placeholder={{ color: "gray.400", fontSize: "14px" }}
                borderRadius={"30px"}
                placeholder={"Search..."}
                value={search} onChange={(e) => setSearch(e.target.value)}
            />
        </InputGroup>
    );
}
