import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Link } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { UnorderedList } from "@atrilabs/react-component-manifests/src/manifests/UnorderedList/UnorderedList.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Testimonial } from "@atrilabs/react-component-manifests/src/manifests/Testimonial/Testimonial.tsx";
import { Accordion } from "@atrilabs/react-component-manifests/src/manifests/Accordion/Accordion.tsx";
import { useheaderCb, useheader__containerCb, useheader__menuCb, useheader__aboutCb, useheader__servicesCb, useheader__projectsCb, useheader__blogCb, useheader__bookCallCb, useclientsCb, useFlex11Cb, useFlex12Cb, useserviceCb, useservices__headerCb, useservices__cardsContainerCb, useservices__innerCardsContainerCb, useservices__allServiceCardCb, useFlex17Cb, useFlex18Cb, useheroCb, usehero__containerCb, useFlex7Cb, useFlex8Cb, usehero__downloadBtnCb, useprojectsCb, useproject__containerCb, useproject__headerCb, useproject__titleBoxCb, useproject__sliderContainerCb, useproject__sliderBoxCb, useproject__cardThreeCb, useprojects__imageBoxCb, useproject__cardThreeTextBoxCb, useFlex52Cb, useproject__cardTwoCb, useproject__cardTwoTextBoxCb, useFlex58Cb, useFlex60Cb, useproject__cardFourCb, useproject__cardFourInfoCb, useFlex94Cb, useFlex96Cb, useproject__cardOneCb, useFlex99Cb, useproject__cardOneTextBoxCb, useFlex98Cb, useblogsCb, useblogs__containerCb, useblogs__sidebarCb, useblogs__sidebarDetailsCb, useblogs__contentsCb, useblogs__cardOneCb, useFlex113Cb, useblogs__cardOneLinkCb, useblogs__cardTwoCb, useblogs__cardTwoLinkCb, useFlex119Cb, useblogs__cardThreeCb, useFlex121Cb, useblogs__cardThreeLinkCb, useblogs__cardFourCb, useblogs__cardFourLinkCb, useFlex125Cb, useaboutCb, useFlex131Cb, useFlex132Cb, useabout__galleryCb, useFlex134Cb, useFlex135Cb, useFlex136Cb, useFlex140Cb, useFlex141Cb, useabout__infoCb, useabout__educationCb, useabout__eduHeaderCb, useabout__CardsCb, useabout__CardCb, useFlex152Cb, useFlex153Cb, useFlex157Cb, useFlex155Cb, useFlex156Cb, useFlex160Cb, useFlex158Cb, useFlex159Cb, useabout__experienceCb, useFlex161Cb, useFlex171Cb, useFlex184Cb, useFlex188Cb, useFlex191Cb, useFlex189Cb, useFlex190Cb, useFlex208Cb, useFlex206Cb, useFlex204Cb, useFlex205Cb, useFlex207Cb, useFlex213Cb, useFlex211Cb, useFlex209Cb, useFlex210Cb, useFlex212Cb, usetestimonialsCb, usetestimonials__containerCb, useFlex176Cb, usefaqCb, usefaq__headerCb, useaccordion__mainContainerCb, useFlex182Cb, useFlex183Cb, usefooterCb, usefooter__headerCb, usefooter__quickLinksCb, useFlex219Cb, useFlex221Cb, usefooter__quickLinkBoxCb, useFlex222Cb, useFlex223Cb, useFlex224Cb, usefooter__copyrightCb, useIogoCb, useheader__aboutLinkCb, useheader__sevicesLinkCb, useheader__projectsLinkCb, useheader__blogLinkCb, useheader__bookCallLinkCb, useheader__arrowCb, useclients__titleCb, useImage16Cb, useImage17Cb, useImage18Cb, useImage21Cb, useservices__titleCb, useservices__descriptionCb, useservice__allServiceIconCb, useservices__cardOneTitleCb, useTextBox11Cb, useservices__listCb, useservice__techStackIconCb, useTextBox9Cb, useTextBox12Cb, useservices__applicationListCb, useImage24Cb, useTextBox10Cb, useTextBox13Cb, useservices__expectationCb, usehero__imageCb, usehero__highlightTextCb, usehero__textCb, usehero__descriptionCb, usehero__buttonCb, useLink13Cb, usehero__downloadCVArrowCb, useproject__viewBtnCb, useproject__titleCb, useTextBox20Cb, useprojects__imageCb, useproject__cardTitleCb, useTextBox24Cb, useImage31Cb, useproject__cardThreeLinkCb, useTextBox31Cb, useTextBox32Cb, useproject__cardTwoLinkCb, useImage35Cb, useImage36Cb, useTextBox49Cb, useTextBox50Cb, useproject__cardFourLinkCb, useImage53Cb, useImage54Cb, useImage56Cb, useTextBox51Cb, useTextBox52Cb, useImage55Cb, useproject__cardOneLinkCb, useblogs__titleCb, useTextBox54Cb, useblogs__sidebarLinkCb, useImage57Cb, useTextBox64Cb, useTextBox61Cb, useTextBox62Cb, useTextBox63Cb, useImage58Cb, useLink28Cb, useTextBox73Cb, useLink30Cb, useImage60Cb, useTextBox70Cb, useTextBox71Cb, useTextBox72Cb, useTextBox77Cb, useTextBox74Cb, useTextBox75Cb, useTextBox76Cb, useImage61Cb, useLink31Cb, useTextBox81Cb, useLink32Cb, useImage62Cb, useTextBox78Cb, useTextBox79Cb, useTextBox80Cb, useTextBox84Cb, useabout__titleCb, useTextBox83Cb, useImage63Cb, useImage64Cb, useImage69Cb, useImage71Cb, useTextBox85Cb, useImage73Cb, useTextBox86Cb, useImage75Cb, useTextBox87Cb, useTextBox88Cb, useTextBox89Cb, useTextBox90Cb, useImage76Cb, useTextBox91Cb, useTextBox92Cb, useImage77Cb, useTextBox93Cb, useTextBox94Cb, useImage78Cb, useTextBox95Cb, useImage85Cb, useTextBox112Cb, useImage86Cb, useTextBox113Cb, useTextBox114Cb, useTextBox127Cb, useTextBox128Cb, useImage91Cb, useTextBox129Cb, useImage92Cb, useTextBox130Cb, useTextBox131Cb, useImage93Cb, useTextBox132Cb, useImage94Cb, usetestimonials__innerContainerCb, usetestimonials__titleCb, useTextBox106Cb, usefaq__titleCb, useTextBox108Cb, useAccordion2Cb, useAccordion3Cb, useAccordion4Cb, useAccordion5Cb, useAccordion6Cb, useAccordion7Cb, useAccordion8Cb, useAccordion9Cb, usefooter__topTitleCb, usefooter__subTitleCb, useImage95Cb, useTextBox135Cb, useImage96Cb, usefooter__mailIdCb, useLink41Cb, useLink43Cb, useLink44Cb, useLink37Cb, useLink39Cb, useLink40Cb, useLink34Cb, useLink35Cb, useLink36Cb, useTextBox137Cb, useLink45Cb, useTextBox138Cb, useLink46Cb, useTextBox139Cb, useLink47Cb, useTextBox140Cb, useLink48Cb, useTextBox141Cb, useLink49Cb, useTextBox142Cb, useLink50Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const headerProps = useStore((state)=>state["Home"]["header"]);
const headerIoProps = useIoStore((state)=>state["Home"]["header"]);
const headerCb = useheaderCb()
const header__containerProps = useStore((state)=>state["Home"]["header__container"]);
const header__containerIoProps = useIoStore((state)=>state["Home"]["header__container"]);
const header__containerCb = useheader__containerCb()
const header__menuProps = useStore((state)=>state["Home"]["header__menu"]);
const header__menuIoProps = useIoStore((state)=>state["Home"]["header__menu"]);
const header__menuCb = useheader__menuCb()
const header__aboutProps = useStore((state)=>state["Home"]["header__about"]);
const header__aboutIoProps = useIoStore((state)=>state["Home"]["header__about"]);
const header__aboutCb = useheader__aboutCb()
const header__servicesProps = useStore((state)=>state["Home"]["header__services"]);
const header__servicesIoProps = useIoStore((state)=>state["Home"]["header__services"]);
const header__servicesCb = useheader__servicesCb()
const header__projectsProps = useStore((state)=>state["Home"]["header__projects"]);
const header__projectsIoProps = useIoStore((state)=>state["Home"]["header__projects"]);
const header__projectsCb = useheader__projectsCb()
const header__blogProps = useStore((state)=>state["Home"]["header__blog"]);
const header__blogIoProps = useIoStore((state)=>state["Home"]["header__blog"]);
const header__blogCb = useheader__blogCb()
const header__bookCallProps = useStore((state)=>state["Home"]["header__bookCall"]);
const header__bookCallIoProps = useIoStore((state)=>state["Home"]["header__bookCall"]);
const header__bookCallCb = useheader__bookCallCb()
const clientsProps = useStore((state)=>state["Home"]["clients"]);
const clientsIoProps = useIoStore((state)=>state["Home"]["clients"]);
const clientsCb = useclientsCb()
const Flex11Props = useStore((state)=>state["Home"]["Flex11"]);
const Flex11IoProps = useIoStore((state)=>state["Home"]["Flex11"]);
const Flex11Cb = useFlex11Cb()
const Flex12Props = useStore((state)=>state["Home"]["Flex12"]);
const Flex12IoProps = useIoStore((state)=>state["Home"]["Flex12"]);
const Flex12Cb = useFlex12Cb()
const serviceProps = useStore((state)=>state["Home"]["service"]);
const serviceIoProps = useIoStore((state)=>state["Home"]["service"]);
const serviceCb = useserviceCb()
const services__headerProps = useStore((state)=>state["Home"]["services__header"]);
const services__headerIoProps = useIoStore((state)=>state["Home"]["services__header"]);
const services__headerCb = useservices__headerCb()
const services__cardsContainerProps = useStore((state)=>state["Home"]["services__cardsContainer"]);
const services__cardsContainerIoProps = useIoStore((state)=>state["Home"]["services__cardsContainer"]);
const services__cardsContainerCb = useservices__cardsContainerCb()
const services__innerCardsContainerProps = useStore((state)=>state["Home"]["services__innerCardsContainer"]);
const services__innerCardsContainerIoProps = useIoStore((state)=>state["Home"]["services__innerCardsContainer"]);
const services__innerCardsContainerCb = useservices__innerCardsContainerCb()
const services__allServiceCardProps = useStore((state)=>state["Home"]["services__allServiceCard"]);
const services__allServiceCardIoProps = useIoStore((state)=>state["Home"]["services__allServiceCard"]);
const services__allServiceCardCb = useservices__allServiceCardCb()
const Flex17Props = useStore((state)=>state["Home"]["Flex17"]);
const Flex17IoProps = useIoStore((state)=>state["Home"]["Flex17"]);
const Flex17Cb = useFlex17Cb()
const Flex18Props = useStore((state)=>state["Home"]["Flex18"]);
const Flex18IoProps = useIoStore((state)=>state["Home"]["Flex18"]);
const Flex18Cb = useFlex18Cb()
const heroProps = useStore((state)=>state["Home"]["hero"]);
const heroIoProps = useIoStore((state)=>state["Home"]["hero"]);
const heroCb = useheroCb()
const hero__containerProps = useStore((state)=>state["Home"]["hero__container"]);
const hero__containerIoProps = useIoStore((state)=>state["Home"]["hero__container"]);
const hero__containerCb = usehero__containerCb()
const Flex7Props = useStore((state)=>state["Home"]["Flex7"]);
const Flex7IoProps = useIoStore((state)=>state["Home"]["Flex7"]);
const Flex7Cb = useFlex7Cb()
const Flex8Props = useStore((state)=>state["Home"]["Flex8"]);
const Flex8IoProps = useIoStore((state)=>state["Home"]["Flex8"]);
const Flex8Cb = useFlex8Cb()
const hero__downloadBtnProps = useStore((state)=>state["Home"]["hero__downloadBtn"]);
const hero__downloadBtnIoProps = useIoStore((state)=>state["Home"]["hero__downloadBtn"]);
const hero__downloadBtnCb = usehero__downloadBtnCb()
const projectsProps = useStore((state)=>state["Home"]["projects"]);
const projectsIoProps = useIoStore((state)=>state["Home"]["projects"]);
const projectsCb = useprojectsCb()
const project__containerProps = useStore((state)=>state["Home"]["project__container"]);
const project__containerIoProps = useIoStore((state)=>state["Home"]["project__container"]);
const project__containerCb = useproject__containerCb()
const project__headerProps = useStore((state)=>state["Home"]["project__header"]);
const project__headerIoProps = useIoStore((state)=>state["Home"]["project__header"]);
const project__headerCb = useproject__headerCb()
const project__titleBoxProps = useStore((state)=>state["Home"]["project__titleBox"]);
const project__titleBoxIoProps = useIoStore((state)=>state["Home"]["project__titleBox"]);
const project__titleBoxCb = useproject__titleBoxCb()
const project__sliderContainerProps = useStore((state)=>state["Home"]["project__sliderContainer"]);
const project__sliderContainerIoProps = useIoStore((state)=>state["Home"]["project__sliderContainer"]);
const project__sliderContainerCb = useproject__sliderContainerCb()
const project__sliderBoxProps = useStore((state)=>state["Home"]["project__sliderBox"]);
const project__sliderBoxIoProps = useIoStore((state)=>state["Home"]["project__sliderBox"]);
const project__sliderBoxCb = useproject__sliderBoxCb()
const project__cardThreeProps = useStore((state)=>state["Home"]["project__cardThree"]);
const project__cardThreeIoProps = useIoStore((state)=>state["Home"]["project__cardThree"]);
const project__cardThreeCb = useproject__cardThreeCb()
const projects__imageBoxProps = useStore((state)=>state["Home"]["projects__imageBox"]);
const projects__imageBoxIoProps = useIoStore((state)=>state["Home"]["projects__imageBox"]);
const projects__imageBoxCb = useprojects__imageBoxCb()
const project__cardThreeTextBoxProps = useStore((state)=>state["Home"]["project__cardThreeTextBox"]);
const project__cardThreeTextBoxIoProps = useIoStore((state)=>state["Home"]["project__cardThreeTextBox"]);
const project__cardThreeTextBoxCb = useproject__cardThreeTextBoxCb()
const Flex52Props = useStore((state)=>state["Home"]["Flex52"]);
const Flex52IoProps = useIoStore((state)=>state["Home"]["Flex52"]);
const Flex52Cb = useFlex52Cb()
const project__cardTwoProps = useStore((state)=>state["Home"]["project__cardTwo"]);
const project__cardTwoIoProps = useIoStore((state)=>state["Home"]["project__cardTwo"]);
const project__cardTwoCb = useproject__cardTwoCb()
const project__cardTwoTextBoxProps = useStore((state)=>state["Home"]["project__cardTwoTextBox"]);
const project__cardTwoTextBoxIoProps = useIoStore((state)=>state["Home"]["project__cardTwoTextBox"]);
const project__cardTwoTextBoxCb = useproject__cardTwoTextBoxCb()
const Flex58Props = useStore((state)=>state["Home"]["Flex58"]);
const Flex58IoProps = useIoStore((state)=>state["Home"]["Flex58"]);
const Flex58Cb = useFlex58Cb()
const Flex60Props = useStore((state)=>state["Home"]["Flex60"]);
const Flex60IoProps = useIoStore((state)=>state["Home"]["Flex60"]);
const Flex60Cb = useFlex60Cb()
const project__cardFourProps = useStore((state)=>state["Home"]["project__cardFour"]);
const project__cardFourIoProps = useIoStore((state)=>state["Home"]["project__cardFour"]);
const project__cardFourCb = useproject__cardFourCb()
const project__cardFourInfoProps = useStore((state)=>state["Home"]["project__cardFourInfo"]);
const project__cardFourInfoIoProps = useIoStore((state)=>state["Home"]["project__cardFourInfo"]);
const project__cardFourInfoCb = useproject__cardFourInfoCb()
const Flex94Props = useStore((state)=>state["Home"]["Flex94"]);
const Flex94IoProps = useIoStore((state)=>state["Home"]["Flex94"]);
const Flex94Cb = useFlex94Cb()
const Flex96Props = useStore((state)=>state["Home"]["Flex96"]);
const Flex96IoProps = useIoStore((state)=>state["Home"]["Flex96"]);
const Flex96Cb = useFlex96Cb()
const project__cardOneProps = useStore((state)=>state["Home"]["project__cardOne"]);
const project__cardOneIoProps = useIoStore((state)=>state["Home"]["project__cardOne"]);
const project__cardOneCb = useproject__cardOneCb()
const Flex99Props = useStore((state)=>state["Home"]["Flex99"]);
const Flex99IoProps = useIoStore((state)=>state["Home"]["Flex99"]);
const Flex99Cb = useFlex99Cb()
const project__cardOneTextBoxProps = useStore((state)=>state["Home"]["project__cardOneTextBox"]);
const project__cardOneTextBoxIoProps = useIoStore((state)=>state["Home"]["project__cardOneTextBox"]);
const project__cardOneTextBoxCb = useproject__cardOneTextBoxCb()
const Flex98Props = useStore((state)=>state["Home"]["Flex98"]);
const Flex98IoProps = useIoStore((state)=>state["Home"]["Flex98"]);
const Flex98Cb = useFlex98Cb()
const blogsProps = useStore((state)=>state["Home"]["blogs"]);
const blogsIoProps = useIoStore((state)=>state["Home"]["blogs"]);
const blogsCb = useblogsCb()
const blogs__containerProps = useStore((state)=>state["Home"]["blogs__container"]);
const blogs__containerIoProps = useIoStore((state)=>state["Home"]["blogs__container"]);
const blogs__containerCb = useblogs__containerCb()
const blogs__sidebarProps = useStore((state)=>state["Home"]["blogs__sidebar"]);
const blogs__sidebarIoProps = useIoStore((state)=>state["Home"]["blogs__sidebar"]);
const blogs__sidebarCb = useblogs__sidebarCb()
const blogs__sidebarDetailsProps = useStore((state)=>state["Home"]["blogs__sidebarDetails"]);
const blogs__sidebarDetailsIoProps = useIoStore((state)=>state["Home"]["blogs__sidebarDetails"]);
const blogs__sidebarDetailsCb = useblogs__sidebarDetailsCb()
const blogs__contentsProps = useStore((state)=>state["Home"]["blogs__contents"]);
const blogs__contentsIoProps = useIoStore((state)=>state["Home"]["blogs__contents"]);
const blogs__contentsCb = useblogs__contentsCb()
const blogs__cardOneProps = useStore((state)=>state["Home"]["blogs__cardOne"]);
const blogs__cardOneIoProps = useIoStore((state)=>state["Home"]["blogs__cardOne"]);
const blogs__cardOneCb = useblogs__cardOneCb()
const Flex113Props = useStore((state)=>state["Home"]["Flex113"]);
const Flex113IoProps = useIoStore((state)=>state["Home"]["Flex113"]);
const Flex113Cb = useFlex113Cb()
const blogs__cardOneLinkProps = useStore((state)=>state["Home"]["blogs__cardOneLink"]);
const blogs__cardOneLinkIoProps = useIoStore((state)=>state["Home"]["blogs__cardOneLink"]);
const blogs__cardOneLinkCb = useblogs__cardOneLinkCb()
const blogs__cardTwoProps = useStore((state)=>state["Home"]["blogs__cardTwo"]);
const blogs__cardTwoIoProps = useIoStore((state)=>state["Home"]["blogs__cardTwo"]);
const blogs__cardTwoCb = useblogs__cardTwoCb()
const blogs__cardTwoLinkProps = useStore((state)=>state["Home"]["blogs__cardTwoLink"]);
const blogs__cardTwoLinkIoProps = useIoStore((state)=>state["Home"]["blogs__cardTwoLink"]);
const blogs__cardTwoLinkCb = useblogs__cardTwoLinkCb()
const Flex119Props = useStore((state)=>state["Home"]["Flex119"]);
const Flex119IoProps = useIoStore((state)=>state["Home"]["Flex119"]);
const Flex119Cb = useFlex119Cb()
const blogs__cardThreeProps = useStore((state)=>state["Home"]["blogs__cardThree"]);
const blogs__cardThreeIoProps = useIoStore((state)=>state["Home"]["blogs__cardThree"]);
const blogs__cardThreeCb = useblogs__cardThreeCb()
const Flex121Props = useStore((state)=>state["Home"]["Flex121"]);
const Flex121IoProps = useIoStore((state)=>state["Home"]["Flex121"]);
const Flex121Cb = useFlex121Cb()
const blogs__cardThreeLinkProps = useStore((state)=>state["Home"]["blogs__cardThreeLink"]);
const blogs__cardThreeLinkIoProps = useIoStore((state)=>state["Home"]["blogs__cardThreeLink"]);
const blogs__cardThreeLinkCb = useblogs__cardThreeLinkCb()
const blogs__cardFourProps = useStore((state)=>state["Home"]["blogs__cardFour"]);
const blogs__cardFourIoProps = useIoStore((state)=>state["Home"]["blogs__cardFour"]);
const blogs__cardFourCb = useblogs__cardFourCb()
const blogs__cardFourLinkProps = useStore((state)=>state["Home"]["blogs__cardFourLink"]);
const blogs__cardFourLinkIoProps = useIoStore((state)=>state["Home"]["blogs__cardFourLink"]);
const blogs__cardFourLinkCb = useblogs__cardFourLinkCb()
const Flex125Props = useStore((state)=>state["Home"]["Flex125"]);
const Flex125IoProps = useIoStore((state)=>state["Home"]["Flex125"]);
const Flex125Cb = useFlex125Cb()
const aboutProps = useStore((state)=>state["Home"]["about"]);
const aboutIoProps = useIoStore((state)=>state["Home"]["about"]);
const aboutCb = useaboutCb()
const Flex131Props = useStore((state)=>state["Home"]["Flex131"]);
const Flex131IoProps = useIoStore((state)=>state["Home"]["Flex131"]);
const Flex131Cb = useFlex131Cb()
const Flex132Props = useStore((state)=>state["Home"]["Flex132"]);
const Flex132IoProps = useIoStore((state)=>state["Home"]["Flex132"]);
const Flex132Cb = useFlex132Cb()
const about__galleryProps = useStore((state)=>state["Home"]["about__gallery"]);
const about__galleryIoProps = useIoStore((state)=>state["Home"]["about__gallery"]);
const about__galleryCb = useabout__galleryCb()
const Flex134Props = useStore((state)=>state["Home"]["Flex134"]);
const Flex134IoProps = useIoStore((state)=>state["Home"]["Flex134"]);
const Flex134Cb = useFlex134Cb()
const Flex135Props = useStore((state)=>state["Home"]["Flex135"]);
const Flex135IoProps = useIoStore((state)=>state["Home"]["Flex135"]);
const Flex135Cb = useFlex135Cb()
const Flex136Props = useStore((state)=>state["Home"]["Flex136"]);
const Flex136IoProps = useIoStore((state)=>state["Home"]["Flex136"]);
const Flex136Cb = useFlex136Cb()
const Flex140Props = useStore((state)=>state["Home"]["Flex140"]);
const Flex140IoProps = useIoStore((state)=>state["Home"]["Flex140"]);
const Flex140Cb = useFlex140Cb()
const Flex141Props = useStore((state)=>state["Home"]["Flex141"]);
const Flex141IoProps = useIoStore((state)=>state["Home"]["Flex141"]);
const Flex141Cb = useFlex141Cb()
const about__infoProps = useStore((state)=>state["Home"]["about__info"]);
const about__infoIoProps = useIoStore((state)=>state["Home"]["about__info"]);
const about__infoCb = useabout__infoCb()
const about__educationProps = useStore((state)=>state["Home"]["about__education"]);
const about__educationIoProps = useIoStore((state)=>state["Home"]["about__education"]);
const about__educationCb = useabout__educationCb()
const about__eduHeaderProps = useStore((state)=>state["Home"]["about__eduHeader"]);
const about__eduHeaderIoProps = useIoStore((state)=>state["Home"]["about__eduHeader"]);
const about__eduHeaderCb = useabout__eduHeaderCb()
const about__CardsProps = useStore((state)=>state["Home"]["about__Cards"]);
const about__CardsIoProps = useIoStore((state)=>state["Home"]["about__Cards"]);
const about__CardsCb = useabout__CardsCb()
const about__CardProps = useStore((state)=>state["Home"]["about__Card"]);
const about__CardIoProps = useIoStore((state)=>state["Home"]["about__Card"]);
const about__CardCb = useabout__CardCb()
const Flex152Props = useStore((state)=>state["Home"]["Flex152"]);
const Flex152IoProps = useIoStore((state)=>state["Home"]["Flex152"]);
const Flex152Cb = useFlex152Cb()
const Flex153Props = useStore((state)=>state["Home"]["Flex153"]);
const Flex153IoProps = useIoStore((state)=>state["Home"]["Flex153"]);
const Flex153Cb = useFlex153Cb()
const Flex157Props = useStore((state)=>state["Home"]["Flex157"]);
const Flex157IoProps = useIoStore((state)=>state["Home"]["Flex157"]);
const Flex157Cb = useFlex157Cb()
const Flex155Props = useStore((state)=>state["Home"]["Flex155"]);
const Flex155IoProps = useIoStore((state)=>state["Home"]["Flex155"]);
const Flex155Cb = useFlex155Cb()
const Flex156Props = useStore((state)=>state["Home"]["Flex156"]);
const Flex156IoProps = useIoStore((state)=>state["Home"]["Flex156"]);
const Flex156Cb = useFlex156Cb()
const Flex160Props = useStore((state)=>state["Home"]["Flex160"]);
const Flex160IoProps = useIoStore((state)=>state["Home"]["Flex160"]);
const Flex160Cb = useFlex160Cb()
const Flex158Props = useStore((state)=>state["Home"]["Flex158"]);
const Flex158IoProps = useIoStore((state)=>state["Home"]["Flex158"]);
const Flex158Cb = useFlex158Cb()
const Flex159Props = useStore((state)=>state["Home"]["Flex159"]);
const Flex159IoProps = useIoStore((state)=>state["Home"]["Flex159"]);
const Flex159Cb = useFlex159Cb()
const about__experienceProps = useStore((state)=>state["Home"]["about__experience"]);
const about__experienceIoProps = useIoStore((state)=>state["Home"]["about__experience"]);
const about__experienceCb = useabout__experienceCb()
const Flex161Props = useStore((state)=>state["Home"]["Flex161"]);
const Flex161IoProps = useIoStore((state)=>state["Home"]["Flex161"]);
const Flex161Cb = useFlex161Cb()
const Flex171Props = useStore((state)=>state["Home"]["Flex171"]);
const Flex171IoProps = useIoStore((state)=>state["Home"]["Flex171"]);
const Flex171Cb = useFlex171Cb()
const Flex184Props = useStore((state)=>state["Home"]["Flex184"]);
const Flex184IoProps = useIoStore((state)=>state["Home"]["Flex184"]);
const Flex184Cb = useFlex184Cb()
const Flex188Props = useStore((state)=>state["Home"]["Flex188"]);
const Flex188IoProps = useIoStore((state)=>state["Home"]["Flex188"]);
const Flex188Cb = useFlex188Cb()
const Flex191Props = useStore((state)=>state["Home"]["Flex191"]);
const Flex191IoProps = useIoStore((state)=>state["Home"]["Flex191"]);
const Flex191Cb = useFlex191Cb()
const Flex189Props = useStore((state)=>state["Home"]["Flex189"]);
const Flex189IoProps = useIoStore((state)=>state["Home"]["Flex189"]);
const Flex189Cb = useFlex189Cb()
const Flex190Props = useStore((state)=>state["Home"]["Flex190"]);
const Flex190IoProps = useIoStore((state)=>state["Home"]["Flex190"]);
const Flex190Cb = useFlex190Cb()
const Flex208Props = useStore((state)=>state["Home"]["Flex208"]);
const Flex208IoProps = useIoStore((state)=>state["Home"]["Flex208"]);
const Flex208Cb = useFlex208Cb()
const Flex206Props = useStore((state)=>state["Home"]["Flex206"]);
const Flex206IoProps = useIoStore((state)=>state["Home"]["Flex206"]);
const Flex206Cb = useFlex206Cb()
const Flex204Props = useStore((state)=>state["Home"]["Flex204"]);
const Flex204IoProps = useIoStore((state)=>state["Home"]["Flex204"]);
const Flex204Cb = useFlex204Cb()
const Flex205Props = useStore((state)=>state["Home"]["Flex205"]);
const Flex205IoProps = useIoStore((state)=>state["Home"]["Flex205"]);
const Flex205Cb = useFlex205Cb()
const Flex207Props = useStore((state)=>state["Home"]["Flex207"]);
const Flex207IoProps = useIoStore((state)=>state["Home"]["Flex207"]);
const Flex207Cb = useFlex207Cb()
const Flex213Props = useStore((state)=>state["Home"]["Flex213"]);
const Flex213IoProps = useIoStore((state)=>state["Home"]["Flex213"]);
const Flex213Cb = useFlex213Cb()
const Flex211Props = useStore((state)=>state["Home"]["Flex211"]);
const Flex211IoProps = useIoStore((state)=>state["Home"]["Flex211"]);
const Flex211Cb = useFlex211Cb()
const Flex209Props = useStore((state)=>state["Home"]["Flex209"]);
const Flex209IoProps = useIoStore((state)=>state["Home"]["Flex209"]);
const Flex209Cb = useFlex209Cb()
const Flex210Props = useStore((state)=>state["Home"]["Flex210"]);
const Flex210IoProps = useIoStore((state)=>state["Home"]["Flex210"]);
const Flex210Cb = useFlex210Cb()
const Flex212Props = useStore((state)=>state["Home"]["Flex212"]);
const Flex212IoProps = useIoStore((state)=>state["Home"]["Flex212"]);
const Flex212Cb = useFlex212Cb()
const testimonialsProps = useStore((state)=>state["Home"]["testimonials"]);
const testimonialsIoProps = useIoStore((state)=>state["Home"]["testimonials"]);
const testimonialsCb = usetestimonialsCb()
const testimonials__containerProps = useStore((state)=>state["Home"]["testimonials__container"]);
const testimonials__containerIoProps = useIoStore((state)=>state["Home"]["testimonials__container"]);
const testimonials__containerCb = usetestimonials__containerCb()
const Flex176Props = useStore((state)=>state["Home"]["Flex176"]);
const Flex176IoProps = useIoStore((state)=>state["Home"]["Flex176"]);
const Flex176Cb = useFlex176Cb()
const faqProps = useStore((state)=>state["Home"]["faq"]);
const faqIoProps = useIoStore((state)=>state["Home"]["faq"]);
const faqCb = usefaqCb()
const faq__headerProps = useStore((state)=>state["Home"]["faq__header"]);
const faq__headerIoProps = useIoStore((state)=>state["Home"]["faq__header"]);
const faq__headerCb = usefaq__headerCb()
const accordion__mainContainerProps = useStore((state)=>state["Home"]["accordion__mainContainer"]);
const accordion__mainContainerIoProps = useIoStore((state)=>state["Home"]["accordion__mainContainer"]);
const accordion__mainContainerCb = useaccordion__mainContainerCb()
const Flex182Props = useStore((state)=>state["Home"]["Flex182"]);
const Flex182IoProps = useIoStore((state)=>state["Home"]["Flex182"]);
const Flex182Cb = useFlex182Cb()
const Flex183Props = useStore((state)=>state["Home"]["Flex183"]);
const Flex183IoProps = useIoStore((state)=>state["Home"]["Flex183"]);
const Flex183Cb = useFlex183Cb()
const footerProps = useStore((state)=>state["Home"]["footer"]);
const footerIoProps = useIoStore((state)=>state["Home"]["footer"]);
const footerCb = usefooterCb()
const footer__headerProps = useStore((state)=>state["Home"]["footer__header"]);
const footer__headerIoProps = useIoStore((state)=>state["Home"]["footer__header"]);
const footer__headerCb = usefooter__headerCb()
const footer__quickLinksProps = useStore((state)=>state["Home"]["footer__quickLinks"]);
const footer__quickLinksIoProps = useIoStore((state)=>state["Home"]["footer__quickLinks"]);
const footer__quickLinksCb = usefooter__quickLinksCb()
const Flex219Props = useStore((state)=>state["Home"]["Flex219"]);
const Flex219IoProps = useIoStore((state)=>state["Home"]["Flex219"]);
const Flex219Cb = useFlex219Cb()
const Flex221Props = useStore((state)=>state["Home"]["Flex221"]);
const Flex221IoProps = useIoStore((state)=>state["Home"]["Flex221"]);
const Flex221Cb = useFlex221Cb()
const footer__quickLinkBoxProps = useStore((state)=>state["Home"]["footer__quickLinkBox"]);
const footer__quickLinkBoxIoProps = useIoStore((state)=>state["Home"]["footer__quickLinkBox"]);
const footer__quickLinkBoxCb = usefooter__quickLinkBoxCb()
const Flex222Props = useStore((state)=>state["Home"]["Flex222"]);
const Flex222IoProps = useIoStore((state)=>state["Home"]["Flex222"]);
const Flex222Cb = useFlex222Cb()
const Flex223Props = useStore((state)=>state["Home"]["Flex223"]);
const Flex223IoProps = useIoStore((state)=>state["Home"]["Flex223"]);
const Flex223Cb = useFlex223Cb()
const Flex224Props = useStore((state)=>state["Home"]["Flex224"]);
const Flex224IoProps = useIoStore((state)=>state["Home"]["Flex224"]);
const Flex224Cb = useFlex224Cb()
const footer__copyrightProps = useStore((state)=>state["Home"]["footer__copyright"]);
const footer__copyrightIoProps = useIoStore((state)=>state["Home"]["footer__copyright"]);
const footer__copyrightCb = usefooter__copyrightCb()
const IogoProps = useStore((state)=>state["Home"]["Iogo"]);
const IogoIoProps = useIoStore((state)=>state["Home"]["Iogo"]);
const IogoCb = useIogoCb()
const header__aboutLinkProps = useStore((state)=>state["Home"]["header__aboutLink"]);
const header__aboutLinkIoProps = useIoStore((state)=>state["Home"]["header__aboutLink"]);
const header__aboutLinkCb = useheader__aboutLinkCb()
const header__sevicesLinkProps = useStore((state)=>state["Home"]["header__sevicesLink"]);
const header__sevicesLinkIoProps = useIoStore((state)=>state["Home"]["header__sevicesLink"]);
const header__sevicesLinkCb = useheader__sevicesLinkCb()
const header__projectsLinkProps = useStore((state)=>state["Home"]["header__projectsLink"]);
const header__projectsLinkIoProps = useIoStore((state)=>state["Home"]["header__projectsLink"]);
const header__projectsLinkCb = useheader__projectsLinkCb()
const header__blogLinkProps = useStore((state)=>state["Home"]["header__blogLink"]);
const header__blogLinkIoProps = useIoStore((state)=>state["Home"]["header__blogLink"]);
const header__blogLinkCb = useheader__blogLinkCb()
const header__bookCallLinkProps = useStore((state)=>state["Home"]["header__bookCallLink"]);
const header__bookCallLinkIoProps = useIoStore((state)=>state["Home"]["header__bookCallLink"]);
const header__bookCallLinkCb = useheader__bookCallLinkCb()
const header__arrowProps = useStore((state)=>state["Home"]["header__arrow"]);
const header__arrowIoProps = useIoStore((state)=>state["Home"]["header__arrow"]);
const header__arrowCb = useheader__arrowCb()
const clients__titleProps = useStore((state)=>state["Home"]["clients__title"]);
const clients__titleIoProps = useIoStore((state)=>state["Home"]["clients__title"]);
const clients__titleCb = useclients__titleCb()
const Image16Props = useStore((state)=>state["Home"]["Image16"]);
const Image16IoProps = useIoStore((state)=>state["Home"]["Image16"]);
const Image16Cb = useImage16Cb()
const Image17Props = useStore((state)=>state["Home"]["Image17"]);
const Image17IoProps = useIoStore((state)=>state["Home"]["Image17"]);
const Image17Cb = useImage17Cb()
const Image18Props = useStore((state)=>state["Home"]["Image18"]);
const Image18IoProps = useIoStore((state)=>state["Home"]["Image18"]);
const Image18Cb = useImage18Cb()
const Image21Props = useStore((state)=>state["Home"]["Image21"]);
const Image21IoProps = useIoStore((state)=>state["Home"]["Image21"]);
const Image21Cb = useImage21Cb()
const services__titleProps = useStore((state)=>state["Home"]["services__title"]);
const services__titleIoProps = useIoStore((state)=>state["Home"]["services__title"]);
const services__titleCb = useservices__titleCb()
const services__descriptionProps = useStore((state)=>state["Home"]["services__description"]);
const services__descriptionIoProps = useIoStore((state)=>state["Home"]["services__description"]);
const services__descriptionCb = useservices__descriptionCb()
const service__allServiceIconProps = useStore((state)=>state["Home"]["service__allServiceIcon"]);
const service__allServiceIconIoProps = useIoStore((state)=>state["Home"]["service__allServiceIcon"]);
const service__allServiceIconCb = useservice__allServiceIconCb()
const services__cardOneTitleProps = useStore((state)=>state["Home"]["services__cardOneTitle"]);
const services__cardOneTitleIoProps = useIoStore((state)=>state["Home"]["services__cardOneTitle"]);
const services__cardOneTitleCb = useservices__cardOneTitleCb()
const TextBox11Props = useStore((state)=>state["Home"]["TextBox11"]);
const TextBox11IoProps = useIoStore((state)=>state["Home"]["TextBox11"]);
const TextBox11Cb = useTextBox11Cb()
const services__listProps = useStore((state)=>state["Home"]["services__list"]);
const services__listIoProps = useIoStore((state)=>state["Home"]["services__list"]);
const services__listCb = useservices__listCb()
const service__techStackIconProps = useStore((state)=>state["Home"]["service__techStackIcon"]);
const service__techStackIconIoProps = useIoStore((state)=>state["Home"]["service__techStackIcon"]);
const service__techStackIconCb = useservice__techStackIconCb()
const TextBox9Props = useStore((state)=>state["Home"]["TextBox9"]);
const TextBox9IoProps = useIoStore((state)=>state["Home"]["TextBox9"]);
const TextBox9Cb = useTextBox9Cb()
const TextBox12Props = useStore((state)=>state["Home"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["Home"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const services__applicationListProps = useStore((state)=>state["Home"]["services__applicationList"]);
const services__applicationListIoProps = useIoStore((state)=>state["Home"]["services__applicationList"]);
const services__applicationListCb = useservices__applicationListCb()
const Image24Props = useStore((state)=>state["Home"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["Home"]["Image24"]);
const Image24Cb = useImage24Cb()
const TextBox10Props = useStore((state)=>state["Home"]["TextBox10"]);
const TextBox10IoProps = useIoStore((state)=>state["Home"]["TextBox10"]);
const TextBox10Cb = useTextBox10Cb()
const TextBox13Props = useStore((state)=>state["Home"]["TextBox13"]);
const TextBox13IoProps = useIoStore((state)=>state["Home"]["TextBox13"]);
const TextBox13Cb = useTextBox13Cb()
const services__expectationProps = useStore((state)=>state["Home"]["services__expectation"]);
const services__expectationIoProps = useIoStore((state)=>state["Home"]["services__expectation"]);
const services__expectationCb = useservices__expectationCb()
const hero__imageProps = useStore((state)=>state["Home"]["hero__image"]);
const hero__imageIoProps = useIoStore((state)=>state["Home"]["hero__image"]);
const hero__imageCb = usehero__imageCb()
const hero__highlightTextProps = useStore((state)=>state["Home"]["hero__highlightText"]);
const hero__highlightTextIoProps = useIoStore((state)=>state["Home"]["hero__highlightText"]);
const hero__highlightTextCb = usehero__highlightTextCb()
const hero__textProps = useStore((state)=>state["Home"]["hero__text"]);
const hero__textIoProps = useIoStore((state)=>state["Home"]["hero__text"]);
const hero__textCb = usehero__textCb()
const hero__descriptionProps = useStore((state)=>state["Home"]["hero__description"]);
const hero__descriptionIoProps = useIoStore((state)=>state["Home"]["hero__description"]);
const hero__descriptionCb = usehero__descriptionCb()
const hero__buttonProps = useStore((state)=>state["Home"]["hero__button"]);
const hero__buttonIoProps = useIoStore((state)=>state["Home"]["hero__button"]);
const hero__buttonCb = usehero__buttonCb()
const Link13Props = useStore((state)=>state["Home"]["Link13"]);
const Link13IoProps = useIoStore((state)=>state["Home"]["Link13"]);
const Link13Cb = useLink13Cb()
const hero__downloadCVArrowProps = useStore((state)=>state["Home"]["hero__downloadCVArrow"]);
const hero__downloadCVArrowIoProps = useIoStore((state)=>state["Home"]["hero__downloadCVArrow"]);
const hero__downloadCVArrowCb = usehero__downloadCVArrowCb()
const project__viewBtnProps = useStore((state)=>state["Home"]["project__viewBtn"]);
const project__viewBtnIoProps = useIoStore((state)=>state["Home"]["project__viewBtn"]);
const project__viewBtnCb = useproject__viewBtnCb()
const project__titleProps = useStore((state)=>state["Home"]["project__title"]);
const project__titleIoProps = useIoStore((state)=>state["Home"]["project__title"]);
const project__titleCb = useproject__titleCb()
const TextBox20Props = useStore((state)=>state["Home"]["TextBox20"]);
const TextBox20IoProps = useIoStore((state)=>state["Home"]["TextBox20"]);
const TextBox20Cb = useTextBox20Cb()
const projects__imageProps = useStore((state)=>state["Home"]["projects__image"]);
const projects__imageIoProps = useIoStore((state)=>state["Home"]["projects__image"]);
const projects__imageCb = useprojects__imageCb()
const project__cardTitleProps = useStore((state)=>state["Home"]["project__cardTitle"]);
const project__cardTitleIoProps = useIoStore((state)=>state["Home"]["project__cardTitle"]);
const project__cardTitleCb = useproject__cardTitleCb()
const TextBox24Props = useStore((state)=>state["Home"]["TextBox24"]);
const TextBox24IoProps = useIoStore((state)=>state["Home"]["TextBox24"]);
const TextBox24Cb = useTextBox24Cb()
const Image31Props = useStore((state)=>state["Home"]["Image31"]);
const Image31IoProps = useIoStore((state)=>state["Home"]["Image31"]);
const Image31Cb = useImage31Cb()
const project__cardThreeLinkProps = useStore((state)=>state["Home"]["project__cardThreeLink"]);
const project__cardThreeLinkIoProps = useIoStore((state)=>state["Home"]["project__cardThreeLink"]);
const project__cardThreeLinkCb = useproject__cardThreeLinkCb()
const TextBox31Props = useStore((state)=>state["Home"]["TextBox31"]);
const TextBox31IoProps = useIoStore((state)=>state["Home"]["TextBox31"]);
const TextBox31Cb = useTextBox31Cb()
const TextBox32Props = useStore((state)=>state["Home"]["TextBox32"]);
const TextBox32IoProps = useIoStore((state)=>state["Home"]["TextBox32"]);
const TextBox32Cb = useTextBox32Cb()
const project__cardTwoLinkProps = useStore((state)=>state["Home"]["project__cardTwoLink"]);
const project__cardTwoLinkIoProps = useIoStore((state)=>state["Home"]["project__cardTwoLink"]);
const project__cardTwoLinkCb = useproject__cardTwoLinkCb()
const Image35Props = useStore((state)=>state["Home"]["Image35"]);
const Image35IoProps = useIoStore((state)=>state["Home"]["Image35"]);
const Image35Cb = useImage35Cb()
const Image36Props = useStore((state)=>state["Home"]["Image36"]);
const Image36IoProps = useIoStore((state)=>state["Home"]["Image36"]);
const Image36Cb = useImage36Cb()
const TextBox49Props = useStore((state)=>state["Home"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["Home"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const TextBox50Props = useStore((state)=>state["Home"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["Home"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const project__cardFourLinkProps = useStore((state)=>state["Home"]["project__cardFourLink"]);
const project__cardFourLinkIoProps = useIoStore((state)=>state["Home"]["project__cardFourLink"]);
const project__cardFourLinkCb = useproject__cardFourLinkCb()
const Image53Props = useStore((state)=>state["Home"]["Image53"]);
const Image53IoProps = useIoStore((state)=>state["Home"]["Image53"]);
const Image53Cb = useImage53Cb()
const Image54Props = useStore((state)=>state["Home"]["Image54"]);
const Image54IoProps = useIoStore((state)=>state["Home"]["Image54"]);
const Image54Cb = useImage54Cb()
const Image56Props = useStore((state)=>state["Home"]["Image56"]);
const Image56IoProps = useIoStore((state)=>state["Home"]["Image56"]);
const Image56Cb = useImage56Cb()
const TextBox51Props = useStore((state)=>state["Home"]["TextBox51"]);
const TextBox51IoProps = useIoStore((state)=>state["Home"]["TextBox51"]);
const TextBox51Cb = useTextBox51Cb()
const TextBox52Props = useStore((state)=>state["Home"]["TextBox52"]);
const TextBox52IoProps = useIoStore((state)=>state["Home"]["TextBox52"]);
const TextBox52Cb = useTextBox52Cb()
const Image55Props = useStore((state)=>state["Home"]["Image55"]);
const Image55IoProps = useIoStore((state)=>state["Home"]["Image55"]);
const Image55Cb = useImage55Cb()
const project__cardOneLinkProps = useStore((state)=>state["Home"]["project__cardOneLink"]);
const project__cardOneLinkIoProps = useIoStore((state)=>state["Home"]["project__cardOneLink"]);
const project__cardOneLinkCb = useproject__cardOneLinkCb()
const blogs__titleProps = useStore((state)=>state["Home"]["blogs__title"]);
const blogs__titleIoProps = useIoStore((state)=>state["Home"]["blogs__title"]);
const blogs__titleCb = useblogs__titleCb()
const TextBox54Props = useStore((state)=>state["Home"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["Home"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const blogs__sidebarLinkProps = useStore((state)=>state["Home"]["blogs__sidebarLink"]);
const blogs__sidebarLinkIoProps = useIoStore((state)=>state["Home"]["blogs__sidebarLink"]);
const blogs__sidebarLinkCb = useblogs__sidebarLinkCb()
const Image57Props = useStore((state)=>state["Home"]["Image57"]);
const Image57IoProps = useIoStore((state)=>state["Home"]["Image57"]);
const Image57Cb = useImage57Cb()
const TextBox64Props = useStore((state)=>state["Home"]["TextBox64"]);
const TextBox64IoProps = useIoStore((state)=>state["Home"]["TextBox64"]);
const TextBox64Cb = useTextBox64Cb()
const TextBox61Props = useStore((state)=>state["Home"]["TextBox61"]);
const TextBox61IoProps = useIoStore((state)=>state["Home"]["TextBox61"]);
const TextBox61Cb = useTextBox61Cb()
const TextBox62Props = useStore((state)=>state["Home"]["TextBox62"]);
const TextBox62IoProps = useIoStore((state)=>state["Home"]["TextBox62"]);
const TextBox62Cb = useTextBox62Cb()
const TextBox63Props = useStore((state)=>state["Home"]["TextBox63"]);
const TextBox63IoProps = useIoStore((state)=>state["Home"]["TextBox63"]);
const TextBox63Cb = useTextBox63Cb()
const Image58Props = useStore((state)=>state["Home"]["Image58"]);
const Image58IoProps = useIoStore((state)=>state["Home"]["Image58"]);
const Image58Cb = useImage58Cb()
const Link28Props = useStore((state)=>state["Home"]["Link28"]);
const Link28IoProps = useIoStore((state)=>state["Home"]["Link28"]);
const Link28Cb = useLink28Cb()
const TextBox73Props = useStore((state)=>state["Home"]["TextBox73"]);
const TextBox73IoProps = useIoStore((state)=>state["Home"]["TextBox73"]);
const TextBox73Cb = useTextBox73Cb()
const Link30Props = useStore((state)=>state["Home"]["Link30"]);
const Link30IoProps = useIoStore((state)=>state["Home"]["Link30"]);
const Link30Cb = useLink30Cb()
const Image60Props = useStore((state)=>state["Home"]["Image60"]);
const Image60IoProps = useIoStore((state)=>state["Home"]["Image60"]);
const Image60Cb = useImage60Cb()
const TextBox70Props = useStore((state)=>state["Home"]["TextBox70"]);
const TextBox70IoProps = useIoStore((state)=>state["Home"]["TextBox70"]);
const TextBox70Cb = useTextBox70Cb()
const TextBox71Props = useStore((state)=>state["Home"]["TextBox71"]);
const TextBox71IoProps = useIoStore((state)=>state["Home"]["TextBox71"]);
const TextBox71Cb = useTextBox71Cb()
const TextBox72Props = useStore((state)=>state["Home"]["TextBox72"]);
const TextBox72IoProps = useIoStore((state)=>state["Home"]["TextBox72"]);
const TextBox72Cb = useTextBox72Cb()
const TextBox77Props = useStore((state)=>state["Home"]["TextBox77"]);
const TextBox77IoProps = useIoStore((state)=>state["Home"]["TextBox77"]);
const TextBox77Cb = useTextBox77Cb()
const TextBox74Props = useStore((state)=>state["Home"]["TextBox74"]);
const TextBox74IoProps = useIoStore((state)=>state["Home"]["TextBox74"]);
const TextBox74Cb = useTextBox74Cb()
const TextBox75Props = useStore((state)=>state["Home"]["TextBox75"]);
const TextBox75IoProps = useIoStore((state)=>state["Home"]["TextBox75"]);
const TextBox75Cb = useTextBox75Cb()
const TextBox76Props = useStore((state)=>state["Home"]["TextBox76"]);
const TextBox76IoProps = useIoStore((state)=>state["Home"]["TextBox76"]);
const TextBox76Cb = useTextBox76Cb()
const Image61Props = useStore((state)=>state["Home"]["Image61"]);
const Image61IoProps = useIoStore((state)=>state["Home"]["Image61"]);
const Image61Cb = useImage61Cb()
const Link31Props = useStore((state)=>state["Home"]["Link31"]);
const Link31IoProps = useIoStore((state)=>state["Home"]["Link31"]);
const Link31Cb = useLink31Cb()
const TextBox81Props = useStore((state)=>state["Home"]["TextBox81"]);
const TextBox81IoProps = useIoStore((state)=>state["Home"]["TextBox81"]);
const TextBox81Cb = useTextBox81Cb()
const Link32Props = useStore((state)=>state["Home"]["Link32"]);
const Link32IoProps = useIoStore((state)=>state["Home"]["Link32"]);
const Link32Cb = useLink32Cb()
const Image62Props = useStore((state)=>state["Home"]["Image62"]);
const Image62IoProps = useIoStore((state)=>state["Home"]["Image62"]);
const Image62Cb = useImage62Cb()
const TextBox78Props = useStore((state)=>state["Home"]["TextBox78"]);
const TextBox78IoProps = useIoStore((state)=>state["Home"]["TextBox78"]);
const TextBox78Cb = useTextBox78Cb()
const TextBox79Props = useStore((state)=>state["Home"]["TextBox79"]);
const TextBox79IoProps = useIoStore((state)=>state["Home"]["TextBox79"]);
const TextBox79Cb = useTextBox79Cb()
const TextBox80Props = useStore((state)=>state["Home"]["TextBox80"]);
const TextBox80IoProps = useIoStore((state)=>state["Home"]["TextBox80"]);
const TextBox80Cb = useTextBox80Cb()
const TextBox84Props = useStore((state)=>state["Home"]["TextBox84"]);
const TextBox84IoProps = useIoStore((state)=>state["Home"]["TextBox84"]);
const TextBox84Cb = useTextBox84Cb()
const about__titleProps = useStore((state)=>state["Home"]["about__title"]);
const about__titleIoProps = useIoStore((state)=>state["Home"]["about__title"]);
const about__titleCb = useabout__titleCb()
const TextBox83Props = useStore((state)=>state["Home"]["TextBox83"]);
const TextBox83IoProps = useIoStore((state)=>state["Home"]["TextBox83"]);
const TextBox83Cb = useTextBox83Cb()
const Image63Props = useStore((state)=>state["Home"]["Image63"]);
const Image63IoProps = useIoStore((state)=>state["Home"]["Image63"]);
const Image63Cb = useImage63Cb()
const Image64Props = useStore((state)=>state["Home"]["Image64"]);
const Image64IoProps = useIoStore((state)=>state["Home"]["Image64"]);
const Image64Cb = useImage64Cb()
const Image69Props = useStore((state)=>state["Home"]["Image69"]);
const Image69IoProps = useIoStore((state)=>state["Home"]["Image69"]);
const Image69Cb = useImage69Cb()
const Image71Props = useStore((state)=>state["Home"]["Image71"]);
const Image71IoProps = useIoStore((state)=>state["Home"]["Image71"]);
const Image71Cb = useImage71Cb()
const TextBox85Props = useStore((state)=>state["Home"]["TextBox85"]);
const TextBox85IoProps = useIoStore((state)=>state["Home"]["TextBox85"]);
const TextBox85Cb = useTextBox85Cb()
const Image73Props = useStore((state)=>state["Home"]["Image73"]);
const Image73IoProps = useIoStore((state)=>state["Home"]["Image73"]);
const Image73Cb = useImage73Cb()
const TextBox86Props = useStore((state)=>state["Home"]["TextBox86"]);
const TextBox86IoProps = useIoStore((state)=>state["Home"]["TextBox86"]);
const TextBox86Cb = useTextBox86Cb()
const Image75Props = useStore((state)=>state["Home"]["Image75"]);
const Image75IoProps = useIoStore((state)=>state["Home"]["Image75"]);
const Image75Cb = useImage75Cb()
const TextBox87Props = useStore((state)=>state["Home"]["TextBox87"]);
const TextBox87IoProps = useIoStore((state)=>state["Home"]["TextBox87"]);
const TextBox87Cb = useTextBox87Cb()
const TextBox88Props = useStore((state)=>state["Home"]["TextBox88"]);
const TextBox88IoProps = useIoStore((state)=>state["Home"]["TextBox88"]);
const TextBox88Cb = useTextBox88Cb()
const TextBox89Props = useStore((state)=>state["Home"]["TextBox89"]);
const TextBox89IoProps = useIoStore((state)=>state["Home"]["TextBox89"]);
const TextBox89Cb = useTextBox89Cb()
const TextBox90Props = useStore((state)=>state["Home"]["TextBox90"]);
const TextBox90IoProps = useIoStore((state)=>state["Home"]["TextBox90"]);
const TextBox90Cb = useTextBox90Cb()
const Image76Props = useStore((state)=>state["Home"]["Image76"]);
const Image76IoProps = useIoStore((state)=>state["Home"]["Image76"]);
const Image76Cb = useImage76Cb()
const TextBox91Props = useStore((state)=>state["Home"]["TextBox91"]);
const TextBox91IoProps = useIoStore((state)=>state["Home"]["TextBox91"]);
const TextBox91Cb = useTextBox91Cb()
const TextBox92Props = useStore((state)=>state["Home"]["TextBox92"]);
const TextBox92IoProps = useIoStore((state)=>state["Home"]["TextBox92"]);
const TextBox92Cb = useTextBox92Cb()
const Image77Props = useStore((state)=>state["Home"]["Image77"]);
const Image77IoProps = useIoStore((state)=>state["Home"]["Image77"]);
const Image77Cb = useImage77Cb()
const TextBox93Props = useStore((state)=>state["Home"]["TextBox93"]);
const TextBox93IoProps = useIoStore((state)=>state["Home"]["TextBox93"]);
const TextBox93Cb = useTextBox93Cb()
const TextBox94Props = useStore((state)=>state["Home"]["TextBox94"]);
const TextBox94IoProps = useIoStore((state)=>state["Home"]["TextBox94"]);
const TextBox94Cb = useTextBox94Cb()
const Image78Props = useStore((state)=>state["Home"]["Image78"]);
const Image78IoProps = useIoStore((state)=>state["Home"]["Image78"]);
const Image78Cb = useImage78Cb()
const TextBox95Props = useStore((state)=>state["Home"]["TextBox95"]);
const TextBox95IoProps = useIoStore((state)=>state["Home"]["TextBox95"]);
const TextBox95Cb = useTextBox95Cb()
const Image85Props = useStore((state)=>state["Home"]["Image85"]);
const Image85IoProps = useIoStore((state)=>state["Home"]["Image85"]);
const Image85Cb = useImage85Cb()
const TextBox112Props = useStore((state)=>state["Home"]["TextBox112"]);
const TextBox112IoProps = useIoStore((state)=>state["Home"]["TextBox112"]);
const TextBox112Cb = useTextBox112Cb()
const Image86Props = useStore((state)=>state["Home"]["Image86"]);
const Image86IoProps = useIoStore((state)=>state["Home"]["Image86"]);
const Image86Cb = useImage86Cb()
const TextBox113Props = useStore((state)=>state["Home"]["TextBox113"]);
const TextBox113IoProps = useIoStore((state)=>state["Home"]["TextBox113"]);
const TextBox113Cb = useTextBox113Cb()
const TextBox114Props = useStore((state)=>state["Home"]["TextBox114"]);
const TextBox114IoProps = useIoStore((state)=>state["Home"]["TextBox114"]);
const TextBox114Cb = useTextBox114Cb()
const TextBox127Props = useStore((state)=>state["Home"]["TextBox127"]);
const TextBox127IoProps = useIoStore((state)=>state["Home"]["TextBox127"]);
const TextBox127Cb = useTextBox127Cb()
const TextBox128Props = useStore((state)=>state["Home"]["TextBox128"]);
const TextBox128IoProps = useIoStore((state)=>state["Home"]["TextBox128"]);
const TextBox128Cb = useTextBox128Cb()
const Image91Props = useStore((state)=>state["Home"]["Image91"]);
const Image91IoProps = useIoStore((state)=>state["Home"]["Image91"]);
const Image91Cb = useImage91Cb()
const TextBox129Props = useStore((state)=>state["Home"]["TextBox129"]);
const TextBox129IoProps = useIoStore((state)=>state["Home"]["TextBox129"]);
const TextBox129Cb = useTextBox129Cb()
const Image92Props = useStore((state)=>state["Home"]["Image92"]);
const Image92IoProps = useIoStore((state)=>state["Home"]["Image92"]);
const Image92Cb = useImage92Cb()
const TextBox130Props = useStore((state)=>state["Home"]["TextBox130"]);
const TextBox130IoProps = useIoStore((state)=>state["Home"]["TextBox130"]);
const TextBox130Cb = useTextBox130Cb()
const TextBox131Props = useStore((state)=>state["Home"]["TextBox131"]);
const TextBox131IoProps = useIoStore((state)=>state["Home"]["TextBox131"]);
const TextBox131Cb = useTextBox131Cb()
const Image93Props = useStore((state)=>state["Home"]["Image93"]);
const Image93IoProps = useIoStore((state)=>state["Home"]["Image93"]);
const Image93Cb = useImage93Cb()
const TextBox132Props = useStore((state)=>state["Home"]["TextBox132"]);
const TextBox132IoProps = useIoStore((state)=>state["Home"]["TextBox132"]);
const TextBox132Cb = useTextBox132Cb()
const Image94Props = useStore((state)=>state["Home"]["Image94"]);
const Image94IoProps = useIoStore((state)=>state["Home"]["Image94"]);
const Image94Cb = useImage94Cb()
const testimonials__innerContainerProps = useStore((state)=>state["Home"]["testimonials__innerContainer"]);
const testimonials__innerContainerIoProps = useIoStore((state)=>state["Home"]["testimonials__innerContainer"]);
const testimonials__innerContainerCb = usetestimonials__innerContainerCb()
const testimonials__titleProps = useStore((state)=>state["Home"]["testimonials__title"]);
const testimonials__titleIoProps = useIoStore((state)=>state["Home"]["testimonials__title"]);
const testimonials__titleCb = usetestimonials__titleCb()
const TextBox106Props = useStore((state)=>state["Home"]["TextBox106"]);
const TextBox106IoProps = useIoStore((state)=>state["Home"]["TextBox106"]);
const TextBox106Cb = useTextBox106Cb()
const faq__titleProps = useStore((state)=>state["Home"]["faq__title"]);
const faq__titleIoProps = useIoStore((state)=>state["Home"]["faq__title"]);
const faq__titleCb = usefaq__titleCb()
const TextBox108Props = useStore((state)=>state["Home"]["TextBox108"]);
const TextBox108IoProps = useIoStore((state)=>state["Home"]["TextBox108"]);
const TextBox108Cb = useTextBox108Cb()
const Accordion2Props = useStore((state)=>state["Home"]["Accordion2"]);
const Accordion2IoProps = useIoStore((state)=>state["Home"]["Accordion2"]);
const Accordion2Cb = useAccordion2Cb()
const Accordion3Props = useStore((state)=>state["Home"]["Accordion3"]);
const Accordion3IoProps = useIoStore((state)=>state["Home"]["Accordion3"]);
const Accordion3Cb = useAccordion3Cb()
const Accordion4Props = useStore((state)=>state["Home"]["Accordion4"]);
const Accordion4IoProps = useIoStore((state)=>state["Home"]["Accordion4"]);
const Accordion4Cb = useAccordion4Cb()
const Accordion5Props = useStore((state)=>state["Home"]["Accordion5"]);
const Accordion5IoProps = useIoStore((state)=>state["Home"]["Accordion5"]);
const Accordion5Cb = useAccordion5Cb()
const Accordion6Props = useStore((state)=>state["Home"]["Accordion6"]);
const Accordion6IoProps = useIoStore((state)=>state["Home"]["Accordion6"]);
const Accordion6Cb = useAccordion6Cb()
const Accordion7Props = useStore((state)=>state["Home"]["Accordion7"]);
const Accordion7IoProps = useIoStore((state)=>state["Home"]["Accordion7"]);
const Accordion7Cb = useAccordion7Cb()
const Accordion8Props = useStore((state)=>state["Home"]["Accordion8"]);
const Accordion8IoProps = useIoStore((state)=>state["Home"]["Accordion8"]);
const Accordion8Cb = useAccordion8Cb()
const Accordion9Props = useStore((state)=>state["Home"]["Accordion9"]);
const Accordion9IoProps = useIoStore((state)=>state["Home"]["Accordion9"]);
const Accordion9Cb = useAccordion9Cb()
const footer__topTitleProps = useStore((state)=>state["Home"]["footer__topTitle"]);
const footer__topTitleIoProps = useIoStore((state)=>state["Home"]["footer__topTitle"]);
const footer__topTitleCb = usefooter__topTitleCb()
const footer__subTitleProps = useStore((state)=>state["Home"]["footer__subTitle"]);
const footer__subTitleIoProps = useIoStore((state)=>state["Home"]["footer__subTitle"]);
const footer__subTitleCb = usefooter__subTitleCb()
const Image95Props = useStore((state)=>state["Home"]["Image95"]);
const Image95IoProps = useIoStore((state)=>state["Home"]["Image95"]);
const Image95Cb = useImage95Cb()
const TextBox135Props = useStore((state)=>state["Home"]["TextBox135"]);
const TextBox135IoProps = useIoStore((state)=>state["Home"]["TextBox135"]);
const TextBox135Cb = useTextBox135Cb()
const Image96Props = useStore((state)=>state["Home"]["Image96"]);
const Image96IoProps = useIoStore((state)=>state["Home"]["Image96"]);
const Image96Cb = useImage96Cb()
const footer__mailIdProps = useStore((state)=>state["Home"]["footer__mailId"]);
const footer__mailIdIoProps = useIoStore((state)=>state["Home"]["footer__mailId"]);
const footer__mailIdCb = usefooter__mailIdCb()
const Link41Props = useStore((state)=>state["Home"]["Link41"]);
const Link41IoProps = useIoStore((state)=>state["Home"]["Link41"]);
const Link41Cb = useLink41Cb()
const Link43Props = useStore((state)=>state["Home"]["Link43"]);
const Link43IoProps = useIoStore((state)=>state["Home"]["Link43"]);
const Link43Cb = useLink43Cb()
const Link44Props = useStore((state)=>state["Home"]["Link44"]);
const Link44IoProps = useIoStore((state)=>state["Home"]["Link44"]);
const Link44Cb = useLink44Cb()
const Link37Props = useStore((state)=>state["Home"]["Link37"]);
const Link37IoProps = useIoStore((state)=>state["Home"]["Link37"]);
const Link37Cb = useLink37Cb()
const Link39Props = useStore((state)=>state["Home"]["Link39"]);
const Link39IoProps = useIoStore((state)=>state["Home"]["Link39"]);
const Link39Cb = useLink39Cb()
const Link40Props = useStore((state)=>state["Home"]["Link40"]);
const Link40IoProps = useIoStore((state)=>state["Home"]["Link40"]);
const Link40Cb = useLink40Cb()
const Link34Props = useStore((state)=>state["Home"]["Link34"]);
const Link34IoProps = useIoStore((state)=>state["Home"]["Link34"]);
const Link34Cb = useLink34Cb()
const Link35Props = useStore((state)=>state["Home"]["Link35"]);
const Link35IoProps = useIoStore((state)=>state["Home"]["Link35"]);
const Link35Cb = useLink35Cb()
const Link36Props = useStore((state)=>state["Home"]["Link36"]);
const Link36IoProps = useIoStore((state)=>state["Home"]["Link36"]);
const Link36Cb = useLink36Cb()
const TextBox137Props = useStore((state)=>state["Home"]["TextBox137"]);
const TextBox137IoProps = useIoStore((state)=>state["Home"]["TextBox137"]);
const TextBox137Cb = useTextBox137Cb()
const Link45Props = useStore((state)=>state["Home"]["Link45"]);
const Link45IoProps = useIoStore((state)=>state["Home"]["Link45"]);
const Link45Cb = useLink45Cb()
const TextBox138Props = useStore((state)=>state["Home"]["TextBox138"]);
const TextBox138IoProps = useIoStore((state)=>state["Home"]["TextBox138"]);
const TextBox138Cb = useTextBox138Cb()
const Link46Props = useStore((state)=>state["Home"]["Link46"]);
const Link46IoProps = useIoStore((state)=>state["Home"]["Link46"]);
const Link46Cb = useLink46Cb()
const TextBox139Props = useStore((state)=>state["Home"]["TextBox139"]);
const TextBox139IoProps = useIoStore((state)=>state["Home"]["TextBox139"]);
const TextBox139Cb = useTextBox139Cb()
const Link47Props = useStore((state)=>state["Home"]["Link47"]);
const Link47IoProps = useIoStore((state)=>state["Home"]["Link47"]);
const Link47Cb = useLink47Cb()
const TextBox140Props = useStore((state)=>state["Home"]["TextBox140"]);
const TextBox140IoProps = useIoStore((state)=>state["Home"]["TextBox140"]);
const TextBox140Cb = useTextBox140Cb()
const Link48Props = useStore((state)=>state["Home"]["Link48"]);
const Link48IoProps = useIoStore((state)=>state["Home"]["Link48"]);
const Link48Cb = useLink48Cb()
const TextBox141Props = useStore((state)=>state["Home"]["TextBox141"]);
const TextBox141IoProps = useIoStore((state)=>state["Home"]["TextBox141"]);
const TextBox141Cb = useTextBox141Cb()
const Link49Props = useStore((state)=>state["Home"]["Link49"]);
const Link49IoProps = useIoStore((state)=>state["Home"]["Link49"]);
const Link49Cb = useLink49Cb()
const TextBox142Props = useStore((state)=>state["Home"]["TextBox142"]);
const TextBox142IoProps = useIoStore((state)=>state["Home"]["TextBox142"]);
const TextBox142Cb = useTextBox142Cb()
const Link50Props = useStore((state)=>state["Home"]["Link50"]);
const Link50IoProps = useIoStore((state)=>state["Home"]["Link50"]);
const Link50Cb = useLink50Cb()

  return (<>
  <Flex className="p-Home header bpt" {...headerProps} {...headerCb} {...headerIoProps}>
<Flex className="p-Home header__container bpt" {...header__containerProps} {...header__containerCb} {...header__containerIoProps}>
<Image className="p-Home Iogo bpt" {...IogoProps} {...IogoCb} {...IogoIoProps}/>
<Flex className="p-Home header__menu bpt" {...header__menuProps} {...header__menuCb} {...header__menuIoProps}>
<Flex className="p-Home header__about bpt" {...header__aboutProps} {...header__aboutCb} {...header__aboutIoProps}>
<Link className="p-Home header__aboutLink bpt" {...header__aboutLinkProps} {...header__aboutLinkCb} {...header__aboutLinkIoProps}/>
</Flex>
<Flex className="p-Home header__services bpt" {...header__servicesProps} {...header__servicesCb} {...header__servicesIoProps}>
<Link className="p-Home header__sevicesLink bpt" {...header__sevicesLinkProps} {...header__sevicesLinkCb} {...header__sevicesLinkIoProps}/>
</Flex>
<Flex className="p-Home header__projects bpt" {...header__projectsProps} {...header__projectsCb} {...header__projectsIoProps}>
<Link className="p-Home header__projectsLink bpt" {...header__projectsLinkProps} {...header__projectsLinkCb} {...header__projectsLinkIoProps}/>
</Flex>
<Flex className="p-Home header__blog bpt" {...header__blogProps} {...header__blogCb} {...header__blogIoProps}>
<Link className="p-Home header__blogLink bpt" {...header__blogLinkProps} {...header__blogLinkCb} {...header__blogLinkIoProps}/>
</Flex>
<Flex className="p-Home header__bookCall bpt" {...header__bookCallProps} {...header__bookCallCb} {...header__bookCallIoProps}>
<Link className="p-Home header__bookCallLink bpt" {...header__bookCallLinkProps} {...header__bookCallLinkCb} {...header__bookCallLinkIoProps}/>
<Image className="p-Home header__arrow bpt" {...header__arrowProps} {...header__arrowCb} {...header__arrowIoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home hero bpt" {...heroProps} {...heroCb} {...heroIoProps}>
<Flex className="p-Home hero__container bpt" {...hero__containerProps} {...hero__containerCb} {...hero__containerIoProps}>
<Flex className="p-Home Flex7 bpt" {...Flex7Props} {...Flex7Cb} {...Flex7IoProps}>
<TextBox className="p-Home hero__highlightText bpt" {...hero__highlightTextProps} {...hero__highlightTextCb} {...hero__highlightTextIoProps}/>
<TextBox className="p-Home hero__text bpt" {...hero__textProps} {...hero__textCb} {...hero__textIoProps}/>
<TextBox className="p-Home hero__description bpt" {...hero__descriptionProps} {...hero__descriptionCb} {...hero__descriptionIoProps}/>
<Flex className="p-Home Flex8 bpt" {...Flex8Props} {...Flex8Cb} {...Flex8IoProps}>
<Button className="p-Home hero__button bpt" {...hero__buttonProps} {...hero__buttonCb} {...hero__buttonIoProps}/>
<Flex className="p-Home hero__downloadBtn bpt" {...hero__downloadBtnProps} {...hero__downloadBtnCb} {...hero__downloadBtnIoProps}>
<Link className="p-Home Link13 bpt" {...Link13Props} {...Link13Cb} {...Link13IoProps}/>
<Image className="p-Home hero__downloadCVArrow bpt" {...hero__downloadCVArrowProps} {...hero__downloadCVArrowCb} {...hero__downloadCVArrowIoProps}/>
</Flex>
</Flex>
</Flex>
<Image className="p-Home hero__image bpt" {...hero__imageProps} {...hero__imageCb} {...hero__imageIoProps}/>
</Flex>
</Flex>
<Div className="p-Home clients bpt" {...clientsProps} {...clientsCb} {...clientsIoProps}>
<TextBox className="p-Home clients__title bpt" {...clients__titleProps} {...clients__titleCb} {...clients__titleIoProps}/>
<Flex className="p-Home Flex11 bpt" {...Flex11Props} {...Flex11Cb} {...Flex11IoProps}>
<Flex className="p-Home Flex12 bpt" {...Flex12Props} {...Flex12Cb} {...Flex12IoProps}>
<Image className="p-Home Image16 bpt" {...Image16Props} {...Image16Cb} {...Image16IoProps}/>
<Image className="p-Home Image17 bpt" {...Image17Props} {...Image17Cb} {...Image17IoProps}/>
<Image className="p-Home Image18 bpt" {...Image18Props} {...Image18Cb} {...Image18IoProps}/>
<Image className="p-Home Image21 bpt" {...Image21Props} {...Image21Cb} {...Image21IoProps}/>
</Flex>
</Flex>
</Div>
<Div className="p-Home service bpt" {...serviceProps} {...serviceCb} {...serviceIoProps}>
<Flex className="p-Home services__header bpt" {...services__headerProps} {...services__headerCb} {...services__headerIoProps}>
<TextBox className="p-Home services__title bpt" {...services__titleProps} {...services__titleCb} {...services__titleIoProps}/>
<TextBox className="p-Home services__description bpt" {...services__descriptionProps} {...services__descriptionCb} {...services__descriptionIoProps}/>
</Flex>
<Flex className="p-Home services__cardsContainer bpt" {...services__cardsContainerProps} {...services__cardsContainerCb} {...services__cardsContainerIoProps}>
<Flex className="p-Home services__innerCardsContainer bpt" {...services__innerCardsContainerProps} {...services__innerCardsContainerCb} {...services__innerCardsContainerIoProps}>
<Flex className="p-Home services__allServiceCard bpt" {...services__allServiceCardProps} {...services__allServiceCardCb} {...services__allServiceCardIoProps}>
<Image className="p-Home service__allServiceIcon bpt" {...service__allServiceIconProps} {...service__allServiceIconCb} {...service__allServiceIconIoProps}/>
<TextBox className="p-Home services__cardOneTitle bpt" {...services__cardOneTitleProps} {...services__cardOneTitleCb} {...services__cardOneTitleIoProps}/>
<TextBox className="p-Home TextBox11 bpt" {...TextBox11Props} {...TextBox11Cb} {...TextBox11IoProps}/>
<UnorderedList className="p-Home services__list bpt" {...services__listProps} {...services__listCb} {...services__listIoProps}/>
</Flex>
<Flex className="p-Home Flex17 bpt" {...Flex17Props} {...Flex17Cb} {...Flex17IoProps}>
<Image className="p-Home service__techStackIcon bpt" {...service__techStackIconProps} {...service__techStackIconCb} {...service__techStackIconIoProps}/>
<TextBox className="p-Home TextBox9 bpt" {...TextBox9Props} {...TextBox9Cb} {...TextBox9IoProps}/>
<TextBox className="p-Home TextBox12 bpt" {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
<UnorderedList className="p-Home services__applicationList bpt" {...services__applicationListProps} {...services__applicationListCb} {...services__applicationListIoProps}/>
</Flex>
<Flex className="p-Home Flex18 bpt" {...Flex18Props} {...Flex18Cb} {...Flex18IoProps}>
<Image className="p-Home Image24 bpt" {...Image24Props} {...Image24Cb} {...Image24IoProps}/>
<TextBox className="p-Home TextBox10 bpt" {...TextBox10Props} {...TextBox10Cb} {...TextBox10IoProps}/>
<TextBox className="p-Home TextBox13 bpt" {...TextBox13Props} {...TextBox13Cb} {...TextBox13IoProps}/>
<UnorderedList className="p-Home services__expectation bpt" {...services__expectationProps} {...services__expectationCb} {...services__expectationIoProps}/>
</Flex>
</Flex>
</Flex>
</Div>
<Flex className="p-Home projects bpt" {...projectsProps} {...projectsCb} {...projectsIoProps}>
<Flex className="p-Home project__container bpt" {...project__containerProps} {...project__containerCb} {...project__containerIoProps}>
<Flex className="p-Home project__header bpt" {...project__headerProps} {...project__headerCb} {...project__headerIoProps}>
<Flex className="p-Home project__titleBox bpt" {...project__titleBoxProps} {...project__titleBoxCb} {...project__titleBoxIoProps}>
<TextBox className="p-Home project__title bpt" {...project__titleProps} {...project__titleCb} {...project__titleIoProps}/>
<TextBox className="p-Home TextBox20 bpt" {...TextBox20Props} {...TextBox20Cb} {...TextBox20IoProps}/>
</Flex>
<Button className="p-Home project__viewBtn bpt" {...project__viewBtnProps} {...project__viewBtnCb} {...project__viewBtnIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home project__sliderContainer bpt" {...project__sliderContainerProps} {...project__sliderContainerCb} {...project__sliderContainerIoProps}>
<Flex className="p-Home project__sliderBox bpt" {...project__sliderBoxProps} {...project__sliderBoxCb} {...project__sliderBoxIoProps}>
<Flex className="p-Home project__cardOne bpt" {...project__cardOneProps} {...project__cardOneCb} {...project__cardOneIoProps}>
<Flex className="p-Home Flex99 bpt" {...Flex99Props} {...Flex99Cb} {...Flex99IoProps}>
<Image className="p-Home Image56 bpt" {...Image56Props} {...Image56Cb} {...Image56IoProps}/>
</Flex>
<Flex className="p-Home project__cardOneTextBox bpt" {...project__cardOneTextBoxProps} {...project__cardOneTextBoxCb} {...project__cardOneTextBoxIoProps}>
<TextBox className="p-Home TextBox51 bpt" {...TextBox51Props} {...TextBox51Cb} {...TextBox51IoProps}/>
<TextBox className="p-Home TextBox52 bpt" {...TextBox52Props} {...TextBox52Cb} {...TextBox52IoProps}/>
<Flex className="p-Home Flex98 bpt" {...Flex98Props} {...Flex98Cb} {...Flex98IoProps}>
<Link className="p-Home project__cardOneLink bpt" {...project__cardOneLinkProps} {...project__cardOneLinkCb} {...project__cardOneLinkIoProps}/>
<Image className="p-Home Image55 bpt" {...Image55Props} {...Image55Cb} {...Image55IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home project__cardTwo bpt" {...project__cardTwoProps} {...project__cardTwoCb} {...project__cardTwoIoProps}>
<Flex className="p-Home Flex60 bpt" {...Flex60Props} {...Flex60Cb} {...Flex60IoProps}>
<Image className="p-Home Image36 bpt" {...Image36Props} {...Image36Cb} {...Image36IoProps}/>
</Flex>
<Flex className="p-Home project__cardTwoTextBox bpt" {...project__cardTwoTextBoxProps} {...project__cardTwoTextBoxCb} {...project__cardTwoTextBoxIoProps}>
<TextBox className="p-Home TextBox32 bpt" {...TextBox32Props} {...TextBox32Cb} {...TextBox32IoProps}/>
<TextBox className="p-Home TextBox31 bpt" {...TextBox31Props} {...TextBox31Cb} {...TextBox31IoProps}/>
<Flex className="p-Home Flex58 bpt" {...Flex58Props} {...Flex58Cb} {...Flex58IoProps}>
<Link className="p-Home project__cardTwoLink bpt" {...project__cardTwoLinkProps} {...project__cardTwoLinkCb} {...project__cardTwoLinkIoProps}/>
<Image className="p-Home Image35 bpt" {...Image35Props} {...Image35Cb} {...Image35IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home project__cardThree bpt" {...project__cardThreeProps} {...project__cardThreeCb} {...project__cardThreeIoProps}>
<Flex className="p-Home projects__imageBox bpt" {...projects__imageBoxProps} {...projects__imageBoxCb} {...projects__imageBoxIoProps}>
<Image className="p-Home projects__image bpt" {...projects__imageProps} {...projects__imageCb} {...projects__imageIoProps}/>
</Flex>
<Flex className="p-Home project__cardThreeTextBox bpt" {...project__cardThreeTextBoxProps} {...project__cardThreeTextBoxCb} {...project__cardThreeTextBoxIoProps}>
<TextBox className="p-Home project__cardTitle bpt" {...project__cardTitleProps} {...project__cardTitleCb} {...project__cardTitleIoProps}/>
<TextBox className="p-Home TextBox24 bpt" {...TextBox24Props} {...TextBox24Cb} {...TextBox24IoProps}/>
<Flex className="p-Home Flex52 bpt" {...Flex52Props} {...Flex52Cb} {...Flex52IoProps}>
<Link className="p-Home project__cardThreeLink bpt" {...project__cardThreeLinkProps} {...project__cardThreeLinkCb} {...project__cardThreeLinkIoProps}/>
<Image className="p-Home Image31 bpt" {...Image31Props} {...Image31Cb} {...Image31IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home project__cardFour bpt" {...project__cardFourProps} {...project__cardFourCb} {...project__cardFourIoProps}>
<Flex className="p-Home Flex96 bpt" {...Flex96Props} {...Flex96Cb} {...Flex96IoProps}>
<Image className="p-Home Image54 bpt" {...Image54Props} {...Image54Cb} {...Image54IoProps}/>
</Flex>
<Flex className="p-Home project__cardFourInfo bpt" {...project__cardFourInfoProps} {...project__cardFourInfoCb} {...project__cardFourInfoIoProps}>
<TextBox className="p-Home TextBox50 bpt" {...TextBox50Props} {...TextBox50Cb} {...TextBox50IoProps}/>
<TextBox className="p-Home TextBox49 bpt" {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
<Flex className="p-Home Flex94 bpt" {...Flex94Props} {...Flex94Cb} {...Flex94IoProps}>
<Link className="p-Home project__cardFourLink bpt" {...project__cardFourLinkProps} {...project__cardFourLinkCb} {...project__cardFourLinkIoProps}/>
<Image className="p-Home Image53 bpt" {...Image53Props} {...Image53Cb} {...Image53IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home blogs bpt" {...blogsProps} {...blogsCb} {...blogsIoProps}>
<Flex className="p-Home blogs__container bpt" {...blogs__containerProps} {...blogs__containerCb} {...blogs__containerIoProps}>
<Flex className="p-Home blogs__sidebar bpt" {...blogs__sidebarProps} {...blogs__sidebarCb} {...blogs__sidebarIoProps}>
<TextBox className="p-Home blogs__title bpt" {...blogs__titleProps} {...blogs__titleCb} {...blogs__titleIoProps}/>
<TextBox className="p-Home TextBox54 bpt" {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
<Flex className="p-Home blogs__sidebarDetails bpt" {...blogs__sidebarDetailsProps} {...blogs__sidebarDetailsCb} {...blogs__sidebarDetailsIoProps}>
<Link className="p-Home blogs__sidebarLink bpt" {...blogs__sidebarLinkProps} {...blogs__sidebarLinkCb} {...blogs__sidebarLinkIoProps}/>
<Image className="p-Home Image57 bpt" {...Image57Props} {...Image57Cb} {...Image57IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home blogs__contents bpt" {...blogs__contentsProps} {...blogs__contentsCb} {...blogs__contentsIoProps}>
<Flex className="p-Home blogs__cardOne bpt" {...blogs__cardOneProps} {...blogs__cardOneCb} {...blogs__cardOneIoProps}>
<Flex className="p-Home Flex113 bpt" {...Flex113Props} {...Flex113Cb} {...Flex113IoProps}>
<TextBox className="p-Home TextBox61 bpt" {...TextBox61Props} {...TextBox61Cb} {...TextBox61IoProps}/>
<TextBox className="p-Home TextBox62 bpt" {...TextBox62Props} {...TextBox62Cb} {...TextBox62IoProps}/>
<TextBox className="p-Home TextBox63 bpt" {...TextBox63Props} {...TextBox63Cb} {...TextBox63IoProps}/>
</Flex>
<TextBox className="p-Home TextBox64 bpt" {...TextBox64Props} {...TextBox64Cb} {...TextBox64IoProps}/>
<Flex className="p-Home blogs__cardOneLink bpt" {...blogs__cardOneLinkProps} {...blogs__cardOneLinkCb} {...blogs__cardOneLinkIoProps}>
<Link className="p-Home Link28 bpt" {...Link28Props} {...Link28Cb} {...Link28IoProps}/>
<Image className="p-Home Image58 bpt" {...Image58Props} {...Image58Cb} {...Image58IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home blogs__cardTwo bpt" {...blogs__cardTwoProps} {...blogs__cardTwoCb} {...blogs__cardTwoIoProps}>
<Flex className="p-Home Flex119 bpt" {...Flex119Props} {...Flex119Cb} {...Flex119IoProps}>
<TextBox className="p-Home TextBox72 bpt" {...TextBox72Props} {...TextBox72Cb} {...TextBox72IoProps}/>
<TextBox className="p-Home TextBox71 bpt" {...TextBox71Props} {...TextBox71Cb} {...TextBox71IoProps}/>
<TextBox className="p-Home TextBox70 bpt" {...TextBox70Props} {...TextBox70Cb} {...TextBox70IoProps}/>
</Flex>
<TextBox className="p-Home TextBox73 bpt" {...TextBox73Props} {...TextBox73Cb} {...TextBox73IoProps}/>
<Flex className="p-Home blogs__cardTwoLink bpt" {...blogs__cardTwoLinkProps} {...blogs__cardTwoLinkCb} {...blogs__cardTwoLinkIoProps}>
<Link className="p-Home Link30 bpt" {...Link30Props} {...Link30Cb} {...Link30IoProps}/>
<Image className="p-Home Image60 bpt" {...Image60Props} {...Image60Cb} {...Image60IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home blogs__cardThree bpt" {...blogs__cardThreeProps} {...blogs__cardThreeCb} {...blogs__cardThreeIoProps}>
<Flex className="p-Home Flex121 bpt" {...Flex121Props} {...Flex121Cb} {...Flex121IoProps}>
<TextBox className="p-Home TextBox74 bpt" {...TextBox74Props} {...TextBox74Cb} {...TextBox74IoProps}/>
<TextBox className="p-Home TextBox75 bpt" {...TextBox75Props} {...TextBox75Cb} {...TextBox75IoProps}/>
<TextBox className="p-Home TextBox76 bpt" {...TextBox76Props} {...TextBox76Cb} {...TextBox76IoProps}/>
</Flex>
<TextBox className="p-Home TextBox77 bpt" {...TextBox77Props} {...TextBox77Cb} {...TextBox77IoProps}/>
<Flex className="p-Home blogs__cardThreeLink bpt" {...blogs__cardThreeLinkProps} {...blogs__cardThreeLinkCb} {...blogs__cardThreeLinkIoProps}>
<Link className="p-Home Link31 bpt" {...Link31Props} {...Link31Cb} {...Link31IoProps}/>
<Image className="p-Home Image61 bpt" {...Image61Props} {...Image61Cb} {...Image61IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home blogs__cardFour bpt" {...blogs__cardFourProps} {...blogs__cardFourCb} {...blogs__cardFourIoProps}>
<Flex className="p-Home Flex125 bpt" {...Flex125Props} {...Flex125Cb} {...Flex125IoProps}>
<TextBox className="p-Home TextBox80 bpt" {...TextBox80Props} {...TextBox80Cb} {...TextBox80IoProps}/>
<TextBox className="p-Home TextBox79 bpt" {...TextBox79Props} {...TextBox79Cb} {...TextBox79IoProps}/>
<TextBox className="p-Home TextBox78 bpt" {...TextBox78Props} {...TextBox78Cb} {...TextBox78IoProps}/>
</Flex>
<TextBox className="p-Home TextBox81 bpt" {...TextBox81Props} {...TextBox81Cb} {...TextBox81IoProps}/>
<Flex className="p-Home blogs__cardFourLink bpt" {...blogs__cardFourLinkProps} {...blogs__cardFourLinkCb} {...blogs__cardFourLinkIoProps}>
<Link className="p-Home Link32 bpt" {...Link32Props} {...Link32Cb} {...Link32IoProps}/>
<Image className="p-Home Image62 bpt" {...Image62Props} {...Image62Cb} {...Image62IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home about bpt" {...aboutProps} {...aboutCb} {...aboutIoProps}>
<Flex className="p-Home Flex131 bpt" {...Flex131Props} {...Flex131Cb} {...Flex131IoProps}>
<Flex className="p-Home Flex132 bpt" {...Flex132Props} {...Flex132Cb} {...Flex132IoProps}>
<TextBox className="p-Home about__title bpt" {...about__titleProps} {...about__titleCb} {...about__titleIoProps}/>
<TextBox className="p-Home TextBox83 bpt" {...TextBox83Props} {...TextBox83Cb} {...TextBox83IoProps}/>
</Flex>
<TextBox className="p-Home TextBox84 bpt" {...TextBox84Props} {...TextBox84Cb} {...TextBox84IoProps}/>
</Flex>
<Flex className="p-Home about__gallery bpt" {...about__galleryProps} {...about__galleryCb} {...about__galleryIoProps}>
<Flex className="p-Home Flex134 bpt" {...Flex134Props} {...Flex134Cb} {...Flex134IoProps}>
<Image className="p-Home Image63 bpt" {...Image63Props} {...Image63Cb} {...Image63IoProps}/>
</Flex>
<Flex className="p-Home Flex135 bpt" {...Flex135Props} {...Flex135Cb} {...Flex135IoProps}>
<Image className="p-Home Image64 bpt" {...Image64Props} {...Image64Cb} {...Image64IoProps}/>
</Flex>
<Flex className="p-Home Flex136 bpt" {...Flex136Props} {...Flex136Cb} {...Flex136IoProps}>
<Flex className="p-Home Flex140 bpt" {...Flex140Props} {...Flex140Cb} {...Flex140IoProps}>
<Image className="p-Home Image69 bpt" {...Image69Props} {...Image69Cb} {...Image69IoProps}/>
</Flex>
<Flex className="p-Home Flex141 bpt" {...Flex141Props} {...Flex141Cb} {...Flex141IoProps}>
<Image className="p-Home Image71 bpt" {...Image71Props} {...Image71Cb} {...Image71IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home about__info bpt" {...about__infoProps} {...about__infoCb} {...about__infoIoProps}>
<Flex className="p-Home about__education bpt" {...about__educationProps} {...about__educationCb} {...about__educationIoProps}>
<Flex className="p-Home about__eduHeader bpt" {...about__eduHeaderProps} {...about__eduHeaderCb} {...about__eduHeaderIoProps}>
<Image className="p-Home Image73 bpt" {...Image73Props} {...Image73Cb} {...Image73IoProps}/>
<TextBox className="p-Home TextBox85 bpt" {...TextBox85Props} {...TextBox85Cb} {...TextBox85IoProps}/>
</Flex>
<Flex className="p-Home about__Cards bpt" {...about__CardsProps} {...about__CardsCb} {...about__CardsIoProps}>
<Flex className="p-Home about__Card bpt" {...about__CardProps} {...about__CardCb} {...about__CardIoProps}>
<Flex className="p-Home Flex152 bpt" {...Flex152Props} {...Flex152Cb} {...Flex152IoProps}>
<TextBox className="p-Home TextBox86 bpt" {...TextBox86Props} {...TextBox86Cb} {...TextBox86IoProps}/>
<Image className="p-Home Image75 bpt" {...Image75Props} {...Image75Cb} {...Image75IoProps}/>
</Flex>
<Flex className="p-Home Flex153 bpt" {...Flex153Props} {...Flex153Cb} {...Flex153IoProps}>
<TextBox className="p-Home TextBox87 bpt" {...TextBox87Props} {...TextBox87Cb} {...TextBox87IoProps}/>
<TextBox className="p-Home TextBox88 bpt" {...TextBox88Props} {...TextBox88Cb} {...TextBox88IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex157 bpt" {...Flex157Props} {...Flex157Cb} {...Flex157IoProps}>
<Flex className="p-Home Flex156 bpt" {...Flex156Props} {...Flex156Cb} {...Flex156IoProps}>
<TextBox className="p-Home TextBox91 bpt" {...TextBox91Props} {...TextBox91Cb} {...TextBox91IoProps}/>
<Image className="p-Home Image76 bpt" {...Image76Props} {...Image76Cb} {...Image76IoProps}/>
</Flex>
<Flex className="p-Home Flex155 bpt" {...Flex155Props} {...Flex155Cb} {...Flex155IoProps}>
<TextBox className="p-Home TextBox90 bpt" {...TextBox90Props} {...TextBox90Cb} {...TextBox90IoProps}/>
<TextBox className="p-Home TextBox89 bpt" {...TextBox89Props} {...TextBox89Cb} {...TextBox89IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex160 bpt" {...Flex160Props} {...Flex160Cb} {...Flex160IoProps}>
<Flex className="p-Home Flex158 bpt" {...Flex158Props} {...Flex158Cb} {...Flex158IoProps}>
<TextBox className="p-Home TextBox92 bpt" {...TextBox92Props} {...TextBox92Cb} {...TextBox92IoProps}/>
<Image className="p-Home Image77 bpt" {...Image77Props} {...Image77Cb} {...Image77IoProps}/>
</Flex>
<Flex className="p-Home Flex159 bpt" {...Flex159Props} {...Flex159Cb} {...Flex159IoProps}>
<TextBox className="p-Home TextBox93 bpt" {...TextBox93Props} {...TextBox93Cb} {...TextBox93IoProps}/>
<TextBox className="p-Home TextBox94 bpt" {...TextBox94Props} {...TextBox94Cb} {...TextBox94IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home about__experience bpt" {...about__experienceProps} {...about__experienceCb} {...about__experienceIoProps}>
<Flex className="p-Home Flex161 bpt" {...Flex161Props} {...Flex161Cb} {...Flex161IoProps}>
<Image className="p-Home Image78 bpt" {...Image78Props} {...Image78Cb} {...Image78IoProps}/>
<TextBox className="p-Home TextBox95 bpt" {...TextBox95Props} {...TextBox95Cb} {...TextBox95IoProps}/>
</Flex>
<Flex className="p-Home Flex171 bpt" {...Flex171Props} {...Flex171Cb} {...Flex171IoProps}>
<Flex className="p-Home Flex184 bpt" {...Flex184Props} {...Flex184Cb} {...Flex184IoProps}>
<Flex className="p-Home Flex188 bpt" {...Flex188Props} {...Flex188Cb} {...Flex188IoProps}>
<Image className="p-Home Image85 bpt" {...Image85Props} {...Image85Cb} {...Image85IoProps}/>
</Flex>
<Flex className="p-Home Flex191 bpt" {...Flex191Props} {...Flex191Cb} {...Flex191IoProps}>
<Flex className="p-Home Flex189 bpt" {...Flex189Props} {...Flex189Cb} {...Flex189IoProps}>
<TextBox className="p-Home TextBox112 bpt" {...TextBox112Props} {...TextBox112Cb} {...TextBox112IoProps}/>
<Image className="p-Home Image86 bpt" {...Image86Props} {...Image86Cb} {...Image86IoProps}/>
</Flex>
<Flex className="p-Home Flex190 bpt" {...Flex190Props} {...Flex190Cb} {...Flex190IoProps}>
<TextBox className="p-Home TextBox113 bpt" {...TextBox113Props} {...TextBox113Cb} {...TextBox113IoProps}/>
<TextBox className="p-Home TextBox114 bpt" {...TextBox114Props} {...TextBox114Cb} {...TextBox114IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex208 bpt" {...Flex208Props} {...Flex208Cb} {...Flex208IoProps}>
<Flex className="p-Home Flex207 bpt" {...Flex207Props} {...Flex207Cb} {...Flex207IoProps}>
<Image className="p-Home Image92 bpt" {...Image92Props} {...Image92Cb} {...Image92IoProps}/>
</Flex>
<Flex className="p-Home Flex206 bpt" {...Flex206Props} {...Flex206Cb} {...Flex206IoProps}>
<Flex className="p-Home Flex205 bpt" {...Flex205Props} {...Flex205Cb} {...Flex205IoProps}>
<TextBox className="p-Home TextBox129 bpt" {...TextBox129Props} {...TextBox129Cb} {...TextBox129IoProps}/>
<Image className="p-Home Image91 bpt" {...Image91Props} {...Image91Cb} {...Image91IoProps}/>
</Flex>
<Flex className="p-Home Flex204 bpt" {...Flex204Props} {...Flex204Cb} {...Flex204IoProps}>
<TextBox className="p-Home TextBox128 bpt" {...TextBox128Props} {...TextBox128Cb} {...TextBox128IoProps}/>
<TextBox className="p-Home TextBox127 bpt" {...TextBox127Props} {...TextBox127Cb} {...TextBox127IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex213 bpt" {...Flex213Props} {...Flex213Cb} {...Flex213IoProps}>
<Flex className="p-Home Flex212 bpt" {...Flex212Props} {...Flex212Cb} {...Flex212IoProps}>
<Image className="p-Home Image94 bpt" {...Image94Props} {...Image94Cb} {...Image94IoProps}/>
</Flex>
<Flex className="p-Home Flex211 bpt" {...Flex211Props} {...Flex211Cb} {...Flex211IoProps}>
<Flex className="p-Home Flex210 bpt" {...Flex210Props} {...Flex210Cb} {...Flex210IoProps}>
<TextBox className="p-Home TextBox132 bpt" {...TextBox132Props} {...TextBox132Cb} {...TextBox132IoProps}/>
<Image className="p-Home Image93 bpt" {...Image93Props} {...Image93Cb} {...Image93IoProps}/>
</Flex>
<Flex className="p-Home Flex209 bpt" {...Flex209Props} {...Flex209Cb} {...Flex209IoProps}>
<TextBox className="p-Home TextBox131 bpt" {...TextBox131Props} {...TextBox131Cb} {...TextBox131IoProps}/>
<TextBox className="p-Home TextBox130 bpt" {...TextBox130Props} {...TextBox130Cb} {...TextBox130IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home testimonials bpt" {...testimonialsProps} {...testimonialsCb} {...testimonialsIoProps}>
<Flex className="p-Home Flex176 bpt" {...Flex176Props} {...Flex176Cb} {...Flex176IoProps}>
<TextBox className="p-Home testimonials__title bpt" {...testimonials__titleProps} {...testimonials__titleCb} {...testimonials__titleIoProps}/>
<TextBox className="p-Home TextBox106 bpt" {...TextBox106Props} {...TextBox106Cb} {...TextBox106IoProps}/>
</Flex>
<Flex className="p-Home testimonials__container bpt" {...testimonials__containerProps} {...testimonials__containerCb} {...testimonials__containerIoProps}>
<Testimonial className="p-Home testimonials__innerContainer bpt" {...testimonials__innerContainerProps} {...testimonials__innerContainerCb} {...testimonials__innerContainerIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home faq bpt" {...faqProps} {...faqCb} {...faqIoProps}>
<Flex className="p-Home faq__header bpt" {...faq__headerProps} {...faq__headerCb} {...faq__headerIoProps}>
<TextBox className="p-Home faq__title bpt" {...faq__titleProps} {...faq__titleCb} {...faq__titleIoProps}/>
<TextBox className="p-Home TextBox108 bpt" {...TextBox108Props} {...TextBox108Cb} {...TextBox108IoProps}/>
</Flex>
<Flex className="p-Home accordion__mainContainer bpt" {...accordion__mainContainerProps} {...accordion__mainContainerCb} {...accordion__mainContainerIoProps}>
<Flex className="p-Home Flex182 bpt" {...Flex182Props} {...Flex182Cb} {...Flex182IoProps}>
<Accordion className="p-Home Accordion2 bpt" {...Accordion2Props} {...Accordion2Cb} {...Accordion2IoProps}/>
<Accordion className="p-Home Accordion3 bpt" {...Accordion3Props} {...Accordion3Cb} {...Accordion3IoProps}/>
<Accordion className="p-Home Accordion4 bpt" {...Accordion4Props} {...Accordion4Cb} {...Accordion4IoProps}/>
<Accordion className="p-Home Accordion5 bpt" {...Accordion5Props} {...Accordion5Cb} {...Accordion5IoProps}/>
</Flex>
<Flex className="p-Home Flex183 bpt" {...Flex183Props} {...Flex183Cb} {...Flex183IoProps}>
<Accordion className="p-Home Accordion6 bpt" {...Accordion6Props} {...Accordion6Cb} {...Accordion6IoProps}/>
<Accordion className="p-Home Accordion7 bpt" {...Accordion7Props} {...Accordion7Cb} {...Accordion7IoProps}/>
<Accordion className="p-Home Accordion8 bpt" {...Accordion8Props} {...Accordion8Cb} {...Accordion8IoProps}/>
<Accordion className="p-Home Accordion9 bpt" {...Accordion9Props} {...Accordion9Cb} {...Accordion9IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home footer bpt" {...footerProps} {...footerCb} {...footerIoProps}>
<Flex className="p-Home footer__header bpt" {...footer__headerProps} {...footer__headerCb} {...footer__headerIoProps}>
<TextBox className="p-Home footer__topTitle bpt" {...footer__topTitleProps} {...footer__topTitleCb} {...footer__topTitleIoProps}/>
<TextBox className="p-Home footer__subTitle bpt" {...footer__subTitleProps} {...footer__subTitleCb} {...footer__subTitleIoProps}/>
</Flex>
<Flex className="p-Home footer__quickLinks bpt" {...footer__quickLinksProps} {...footer__quickLinksCb} {...footer__quickLinksIoProps}>
<Flex className="p-Home Flex219 bpt" {...Flex219Props} {...Flex219Cb} {...Flex219IoProps}>
<Image className="p-Home Image95 bpt" {...Image95Props} {...Image95Cb} {...Image95IoProps}/>
<TextBox className="p-Home TextBox135 bpt" {...TextBox135Props} {...TextBox135Cb} {...TextBox135IoProps}/>
<Flex className="p-Home Flex221 bpt" {...Flex221Props} {...Flex221Cb} {...Flex221IoProps}>
<Image className="p-Home Image96 bpt" {...Image96Props} {...Image96Cb} {...Image96IoProps}/>
<Link className="p-Home footer__mailId bpt" {...footer__mailIdProps} {...footer__mailIdCb} {...footer__mailIdIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home footer__quickLinkBox bpt" {...footer__quickLinkBoxProps} {...footer__quickLinkBoxCb} {...footer__quickLinkBoxIoProps}>
<Flex className="p-Home Flex224 bpt" {...Flex224Props} {...Flex224Cb} {...Flex224IoProps}>
<Link className="p-Home Link34 bpt" {...Link34Props} {...Link34Cb} {...Link34IoProps}/>
<Link className="p-Home Link35 bpt" {...Link35Props} {...Link35Cb} {...Link35IoProps}/>
<Link className="p-Home Link36 bpt" {...Link36Props} {...Link36Cb} {...Link36IoProps}/>
</Flex>
<Flex className="p-Home Flex223 bpt" {...Flex223Props} {...Flex223Cb} {...Flex223IoProps}>
<Link className="p-Home Link37 bpt" {...Link37Props} {...Link37Cb} {...Link37IoProps}/>
<Link className="p-Home Link39 bpt" {...Link39Props} {...Link39Cb} {...Link39IoProps}/>
<Link className="p-Home Link40 bpt" {...Link40Props} {...Link40Cb} {...Link40IoProps}/>
</Flex>
<Flex className="p-Home Flex222 bpt" {...Flex222Props} {...Flex222Cb} {...Flex222IoProps}>
<Link className="p-Home Link41 bpt" {...Link41Props} {...Link41Cb} {...Link41IoProps}/>
<Link className="p-Home Link43 bpt" {...Link43Props} {...Link43Cb} {...Link43IoProps}/>
<Link className="p-Home Link44 bpt" {...Link44Props} {...Link44Cb} {...Link44IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home footer__copyright bpt" {...footer__copyrightProps} {...footer__copyrightCb} {...footer__copyrightIoProps}>
<TextBox className="p-Home TextBox137 bpt" {...TextBox137Props} {...TextBox137Cb} {...TextBox137IoProps}/>
<Link className="p-Home Link45 bpt" {...Link45Props} {...Link45Cb} {...Link45IoProps}/>
<TextBox className="p-Home TextBox138 bpt" {...TextBox138Props} {...TextBox138Cb} {...TextBox138IoProps}/>
<Link className="p-Home Link46 bpt" {...Link46Props} {...Link46Cb} {...Link46IoProps}/>
<TextBox className="p-Home TextBox139 bpt" {...TextBox139Props} {...TextBox139Cb} {...TextBox139IoProps}/>
<Link className="p-Home Link47 bpt" {...Link47Props} {...Link47Cb} {...Link47IoProps}/>
<TextBox className="p-Home TextBox140 bpt" {...TextBox140Props} {...TextBox140Cb} {...TextBox140IoProps}/>
<Link className="p-Home Link48 bpt" {...Link48Props} {...Link48Cb} {...Link48IoProps}/>
<TextBox className="p-Home TextBox141 bpt" {...TextBox141Props} {...TextBox141Cb} {...TextBox141IoProps}/>
<Link className="p-Home Link49 bpt" {...Link49Props} {...Link49Cb} {...Link49IoProps}/>
<TextBox className="p-Home TextBox142 bpt" {...TextBox142Props} {...TextBox142Cb} {...TextBox142IoProps}/>
<Link className="p-Home Link50 bpt" {...Link50Props} {...Link50Cb} {...Link50IoProps}/>
</Flex>
</Flex>
  </>);
}
