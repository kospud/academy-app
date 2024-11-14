import React, { useEffect, useRef, useState } from 'react'
import { Page, PageBlock, PageBlockHeader } from '../../PageBlocks'
import { CourseMenuContainer, CourseScrollableBlock, CourseScrollContainer, CourseShortDescription, Menu, MenuProps, ScrollContent } from '../MyCoursePage'
import AboutCourse from './AboutCourse'
import { isDesktop, isMobile, isTablet } from 'react-device-detect'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import CoursePageAccordion from './CoursePageAccordion'
import CourseModules from './CourseModules'
import CourseMentors from './CourseMentors'
import CourseReviews from './CourseReviews'
import WhyUs from './WhyUs'
import PriceBlock from './CoursePrice'
import CourseAllCourses from './CourseAllCourses'
import { Grid } from 'antd'


export enum CoursePageMenu {
    aboutCourse = 'О чем этот курс',
    mentors = 'Преподаватели',
    program = 'Программа курса',
    advantages = 'Почему мы',
    price = 'Стоимость',
    reviews = 'Отзывы',
    allCourses = 'Все наши курсы'
}

const mockPriceList= [
    {
        title: 'Оплата сразу',
        price: 49800,
        installment: false,
    },
    {
        title: '6 месяцев',
        price: 8300,
        installment: true,
        description: ['Рассрочка на 6 месяцев', 'без первого взноса']
    },
    {
        title: '12 месяцев',
        price: 4150,
        installment: true,
        description: ['Рассрочка на 12 месяцев', 'без первого взноса']
    },
    {
        title: '24 месяца',
        price: 2075,
        installment: true,
        description: ['Рассрочка на 24 месяца', 'без первого взноса']
    }
]

function CoursePage() {

    const [selectedMenuItem, setSelectedMenuItem] = useState<CoursePageMenu | undefined>(undefined)
    const [scrollContentMarginTop, setMarginTop] = useState<number | undefined>(undefined)
    const scrollContainerRef=useRef<HTMLDivElement>(null)

    const screen = Grid.useBreakpoint()
    const setScrollContentMarginTop = (top: number) => {
        setMarginTop(top)
    }
    
    const elementsToRender: Record<CoursePageMenu, React.JSX.Element> = {
        [CoursePageMenu.aboutCourse]: <AboutCourse />,
        [CoursePageMenu.mentors]: <CourseMentors/>,
        [CoursePageMenu.program]: <CourseModules/>,
        [CoursePageMenu.advantages]: <WhyUs/>,
        [CoursePageMenu.price]: <PriceBlock priceList={mockPriceList}/>,
        [CoursePageMenu.reviews]: <CourseReviews/>,
        [CoursePageMenu.allCourses]: <CourseAllCourses/>
    }

    const menuProps = { items: CoursePageMenu, setSelectedMenuItem, selectedMenuItem } as MenuProps

    const orientation = useSelector((state: RootState) => state.orientation).orientation

    useEffect(()=>{

        if(selectedMenuItem && scrollContainerRef.current){
            scrollContainerRef.current.scrollIntoView()
        }
    }, [selectedMenuItem])

    return (
        <Page>
            <PageBlock>
                <CourseScrollableBlock>
                    <CourseMenuContainer>
                        <PageBlockHeader marginTop={90}>Как написать песню</PageBlockHeader>
                        <CourseShortDescription>Курс о том как написать песню и о чем-нибудь еще</CourseShortDescription>
                        {!screen.xs ? <Menu setMarginTop={setScrollContentMarginTop} {...menuProps} /> : <CoursePageAccordion items={elementsToRender}/>}
                    </CourseMenuContainer>
                    {!screen.xs && <CourseScrollContainer ref={scrollContainerRef}>
                        <ScrollContent style={{ marginTop: scrollContentMarginTop }}>
                            {
                                selectedMenuItem && elementsToRender[selectedMenuItem]
                            }
                        </ScrollContent>
                    </CourseScrollContainer>}
                </CourseScrollableBlock>
            </PageBlock>
        </Page>
    )
}

export default CoursePage