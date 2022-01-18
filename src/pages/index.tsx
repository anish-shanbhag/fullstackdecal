import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import WeekCard from '../components/WeekCard';
import schedule from '../data/schedule';
import { Container, Box, Flex, Text } from '@chakra-ui/react';

const Home: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <Box
        // h={['100vh', '110vh', '105vh', '120vh']}
        backgroundImage={[
          '/img/background-mobile.png',
          null,
          '/img/background.png'
        ]}
        backgroundSize="100% 100%"
      >
        <Container maxW="container.lg">
          <Text
            textStyle="label1"
            textShadow="0px 0px 25px rgba(109, 23, 139, 0.25)"
            pt={[10, 20]}
            mb={3}
          >
            CS 198-099&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;SPRING 22
          </Text>
          <Text
            textStyle="title2"
            color="transparent"
            textShadow="0px 0px 25px rgba(109, 23, 139, 0.25)"
            mb={[2, 0]}
            sx={{ WebkitTextStroke: '2px white' }}
          >
            INTRODUCTION TO
          </Text>
          <Text textStyle="title1" color="white">
            FULL STACK
            <br />
            DEVELOPMENT
          </Text>
          <Text
            textStyle="label1"
            textShadow="0px 0px 25px rgba(109, 23, 139, 0.25)"
            mt={2}
            mb={[8, 12]}
          >
            Tuesday & Thursday, 6:30pm -
            8:00pm&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Physics 1
          </Text>
          <Text textStyle="body2" color="white" mb={[6, 8]}>
            Welcome to{' '}
            <a href="https://webatberkeley.org/">
              Web Development at Berkeley&apos;s
            </a>{' '}
            <Text as="span" fontWeight="bold">
              Introduction to Full Stack Development!
            </Text>{' '}
            In this course, we cover the basics of web development, how the
            internet works, and the frameworks, technologies, and best practices
            that are used in the industry today. No prior CS experience is
            required to participate and succeed in this course, but we do
            acknowledge that we cover a fairly large amount of material and that
            this course can feel like a lot, even for those with past CS
            experience.
          </Text>
          <Text textStyle="body2" color="white" pb={56}>
            The materials in this course have been made available to the public
            in pursuit of reaching, educating, and supporting as many people as
            we can.
          </Text>
        </Container>
      </Box>
      <Container maxW="container.lg" pb={16}>
        <Text textStyle="title2" color="purple" mt={[8, 16]} mb={4}>
          Announcements
        </Text>
        <Box mb={16}>
          <Text textStyle="subtitle2" fontSize="3xl" mb={2}>
            Week 0
          </Text>
          <Text textStyle="body">
            Welcome to the Introduction to Full Stack Development DeCal!
          </Text>
        </Box>
        <Text textStyle="title2" color="purple" mb={8}>
          Course Overview
        </Text>
        <Flex direction="column" gap={7}>
          <>
            {Array(13)
              .fill(0)
              .map((_, index) => {
                const weekLessons = schedule.filter(
                  (lesson) => lesson.week === index
                );

                return (
                  <WeekCard
                    weekNumber={index}
                    lessons={weekLessons}
                    key={index}
                  />
                );
              })}
          </>
        </Flex>
      </Container>
    </Layout>
  );
};

export default Home;
