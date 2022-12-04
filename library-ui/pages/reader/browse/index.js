import { getLayout } from '../../../layout/DashboardLayout';
import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
} from '@chakra-ui/react';
import Search from '../../../assets/svgs/search';
import LibraryCard from '../../../components/Dashboard/LibraryCard';
import LibraryEmptyState from '../../../components/Dashboard/LibraryEmptyState';

const Browse = () => {
  const tabNames = ['Books', 'Author'];
  const tags = ['All', 'Thriller', 'Romance', 'Travel', 'Non fiction', 'Non fiction'];

  return (
    <Box px='24px' py='34px'>
      <Box>
        <Tabs defaultIndex={0} paddingBottom={'16px'}>
          <Flex>
            <TabList width='fit-content'>
              {tabNames.map((tab, index) => (
                <Tab
                  key={index}
                  color='#1F2937'
                  fontSize='18px'
                  fontWeight='500'
                  _selected={{
                    color: '#25020D',
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    borderBottom: '3px solid #25020D',
                  }}
                >
                  {tab}
                </Tab>
              ))}
            </TabList>
            <Spacer />
            <InputGroup width='30%'>
              <InputLeftElement pointerEvents='none'>
                <Search />
              </InputLeftElement>
              <Input
                type='search'
                placeholder='What book are you looking for'
                _placeholder={{ color: '#9CA3AF' }}
                borderRadius='37px'
                width='100%'
                bg='#FFFFFF'
                boxShadow='0px 2px 35px rgba(0, 0, 0, 0.08)'
                _focus={{
                  boxShadow: 'unset',
                }}
              />
            </InputGroup>
          </Flex>
          <Flex pt='24px'>
            {tags.map((tag, index) => (
              <Tag
                key={index}
                px='24px'
                py='12px'
                border='1px solid #D1D5DB'
                mr='16px'
                borderRadius='31px'
                cursor='pointer'
              >
                {tag}
              </Tag>
            ))}
          </Flex>
          <TabPanels>
            <TabPanel px='0'>
              <>
                <Box>
                  <Heading
                    pt='34px'
                    color='#1F2937'
                    fontSize='21px'
                    fontWeight={700}
                    fontFamily='Inter'
                    letterSpacing='-0.02em'
                  >
                    Recommended for you
                  </Heading>
                  <Box mt={4}>
                    <SimpleGrid templateColumns='repeat(4, 1fr)' gap={5}>
                      <LibraryCard id='1' link={`/reader/browse/1`} />
                      <LibraryCard id='2' />
                    </SimpleGrid>
                  </Box>
                </Box>
              </>
              <>
                <Box>
                  <Heading
                    pt='34px'
                    color='#1F2937'
                    fontSize='21px'
                    fontWeight={700}
                    fontFamily='Inter'
                    letterSpacing='-0.02em'
                  >
                    Based on your recently added
                  </Heading>
                  <Box mt={4}>
                    <SimpleGrid templateColumns='repeat(4, 1fr)' gap={5}>
                      <LibraryCard id='1' link={`/reader/browse/1`} />
                    </SimpleGrid>
                  </Box>
                </Box>
              </>
            </TabPanel>
            <TabPanel px={0} py={6}>
              <LibraryEmptyState />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

Browse.getLayout = getLayout;
export default Browse;
