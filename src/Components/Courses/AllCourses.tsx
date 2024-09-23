import React, { PropsWithChildren } from 'react'
import mockCourse from '../../img/mockCourse.webp'
import styled from 'styled-components'
import { marginBottom, marginTop } from '../Gaps'
import { Page, PageBlock, PageBlockHeader, PageBlockPhrase, responsiveText } from '../PageBlocks'
import { Link } from 'react-router-dom'
import { MobileBreakPoint, TabletBreakPoint } from '../../utils/consts'

export interface Course {
  id: number,
  title: string,
  img: string,
  phrase: string
}
const mockCourses: Course[] = [
  {
    id: 0,
    title: 'Как написать песню',
    img: mockCourse,
    phrase: 'Все начинается с песен'
  },
  {
    id: 1,
    title: 'Как стать звездой',
    img: mockCourse,
    phrase: 'Все начинается с песен'
  },
  {
    id: 2,
    title: 'Как написать песню',
    img: mockCourse,
    phrase: 'Все начинается с песен'
  },
  {
    id: 3,
    title: 'Как стать звездой',
    img: mockCourse,
    phrase: 'Все начинается с песен'
  },
  {
    id: 0,
    title: 'Как написать песню',
    img: mockCourse,
    phrase: 'Все начинается с песен'
  },
  {
    id: 1,
    title: 'Как стать звездой',
    img: mockCourse,
    phrase: 'Все начинается с песен'
  },
  {
    id: 2,
    title: 'Как написать песню',
    img: mockCourse,
    phrase: 'Все начинается с песен'
  },
  {
    id: 3,
    title: 'Как стать звездой',
    img: mockCourse,
    phrase: 'Все начинается с песен'
  },

]

const CourseCardContainer = styled.div`
  width: 25%;
  min-width: 144px;

  ${marginBottom(90)}

  @media (max-width: ${TabletBreakPoint}){
    width: 50%;
  }
`

const CourseCardContent = styled.div`
  width: 90%;
`

const CourseImg = styled.img`
  object-fit: cover;
  width: 100%;
  aspect-ratio: 89/100;
  ${marginBottom(45)}
  pointer-events: none;
`

const CourseTitle=styled.a`
  display: block;
  text-transform: uppercase;
  ${responsiveText(36,36,16)}
  color: ${(props)=>props.theme.colors.text};
  line-height: 1;
  width: 90%;
  font-weight: 600;
  ${marginBottom(24)}
`

const CoursePhrase=styled.a`
  display: block;
  ${responsiveText(18,18,12)}
  color: ${(props)=>props.theme.colors.text};
  line-height: 1;
  width: 90%;
  ${marginBottom(45)}
`

const CourseLink=styled(Link)`
  display: block;
  ${responsiveText(18,18,12)}
  color: ${(props)=>props.theme.colors.text};
  line-height: 1;
  width: 90%;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 600;
`
export const CourseCard = ({ course, containerStyle }: PropsWithChildren<{ course: Course, containerStyle?: React.CSSProperties }>) => {

  const { title, phrase, id, img } = course
  return <CourseCardContainer style={containerStyle}>
    <CourseCardContent>
      <CourseImg src={img} alt={title} />
      <CourseTitle>{title}</CourseTitle>
      <CoursePhrase>{phrase}</CoursePhrase>
      <CourseLink to={'/courses/'+id}>Перейти</CourseLink>
    </CourseCardContent>
  </CourseCardContainer>
}
export const AllCoursesContainer = styled.div`

  width: 102.5%;
  display: flex;
  ${marginTop(90)}
  flex-wrap: wrap;

  @media (max-width: ${TabletBreakPoint}){
    width: 105%;
  }
  
`
function AllCourses() {

  const courses = mockCourses

  return (
    <Page>
      <PageBlock>
        <PageBlockHeader marginTop={90}>Все курсы</PageBlockHeader>
        <PageBlockPhrase>Добро пожаловать в мир Академии тут снова будет какой-то текст, но пока что так.</PageBlockPhrase>
        <AllCoursesContainer>
          {
            courses.map(course => <CourseCard course={course} />)
          }
        </AllCoursesContainer>
      </PageBlock>
    </Page>
  )
}

export default AllCourses