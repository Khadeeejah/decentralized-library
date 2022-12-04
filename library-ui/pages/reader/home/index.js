import { getLayout } from '../../../layout/DashboardLayout';
import { Heading, Text, Box, Button, Stack, Tag, Flex } from '@chakra-ui/react';

const tags = [
  'Art',
  'Thriller',
  'Romance',
  'Travel',
  'Non-fiction',
  "Children's",
  'Religion',
  'Chirstian',
  'Crime',
  'Fantasy',
  'E-books',
  'Business',
  'Graphic Novel',
  'Philosphy',
  'Poetry',
  'Chirstian',
  'Crime',
  'Chick Lit',
  'Biography',
  'Classic',
  'Comics',
  'Contemporary',
  'Cookbooks',
  'Music',
  'Sport',
];

const Home = () => {
  return (
    <Box px='21px' py='20px'>
      <Box border=' 1px solid #E5E7EB' borderRadius='8px' px='50px' py='16px'>
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
        <Stack direction='row' spacing={4} align='center' justifyContent='flex-end' my='40px'>
          <Button
            bgColor='#E5E7EB'
            fontWeight={700}
            fontSize='14px'
            color='#000000'
            borderRadius='8px'
            _hover={{ bg: '#E5E7EB' }}
            _active={{ bg: '#E5E7EB' }}
            _focus={{
              boxShadow: 'unset',
            }}
          >
            Skip
          </Button>
          <Button
            fontWeight={700}
            fontSize='14px'
            color='#000000'
            borderRadius='8px'
            bgGradient='linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%);'
            _hover={{ bg: 'linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%);' }}
            _active={{ bg: 'linear-gradient(115.03deg, #FFB0BD 6.95%, #FFC2A1 89.09%);' }}
            _focus={{
              boxShadow: 'unset',
            }}
          >
            Continue
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
Home.getLayout = getLayout;
export default Home;
