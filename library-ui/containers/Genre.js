import { Flex, Heading, Tag, Text } from '@chakra-ui/react';
import React from 'react';

export default function Genre(){
    const tags = [
        'Art',
        'Thriller',
        'Romance',
        'Travel',
        'Non-fiction',
        "Children",
        'Religion',
        'Christian',
        'Crime',
        'Fantasy',
        'E-books',
        'Business',
        'Graphic Novel',
        'Philosphy',
        'Poetry',
        'Rom-Com',
        'Crime',
        'Sci-Fi',
        'Biography',
        'Classic',
        'Comics',
        'Contemporary',
        'Cookbooks',
        'Music',
        'Sport',
      ];
      
    return (
      <>
        <Heading
          pt='32px'
          color='#1F2937'
          fontSize='20px'
          fontWeight={700}
          textAlign='center'
          fontFamily='Inter'
          letterSpacing='-0.02em'
        >
          Select Your Favorite Genres
        </Heading>
        <Text color='#9CA3AF' fontFamily='DM Sans' fontSize='14px' pt={1} textAlign='center' letterSpacing='-0.02em'>
          We will help make better book recommendations and tailor what you use in your updates feed.
        </Text>
        <Flex mt='25px' mb='70px' flexWrap='wrap' pb='40px' justifyContent='center'>
          {tags.sort().map((tag, index) => (
            <Tag
              key={index}
              px='45px'
              py='12px'
              border='1px solid #D1D5DB'
              mr='16px'
              mt='21px'
              // width='165px'
              whiteSpace='nowrap'
              overflow='hidden'
              textOverflow='ellipsis'
              borderRadius='31px'
              justifyContent='center'
              fontSize='16px'
              bg='#FFFFFF'
              color='#000000'
              cursor='pointer'
            >
              {tag}
            </Tag>
          ))}
        </Flex>
        
      </>
    )
} 