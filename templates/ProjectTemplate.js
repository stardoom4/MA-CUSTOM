import { MDXRemote } from "next-mdx-remote";
import ProseWrapper from "../components/mdx/ProseWrapper";
import Link from "next/link";
import BackToTop from "../components/mdx/BackToTop";
import { TwitterReply } from "../components/templates/TwitterReply";
import EvergreenIcon from "../components/Icons/EvergreenIcon";
import { Title1 } from "../components/Typography";
import styled from "styled-components";
import { breakpoints } from "../utils/breakpoints";
import BackHoverLink from "../components/links/BackHoverLink";
import Header from "../components/Header";

export default function ProjectTemplate({
    source,
    frontMatter,
    components,
    slug,
}) {
    function formattedDate(date) {
        return new Date(date).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "long",
        });
    }

    return (
        <>
            <Header
                title={frontMatter.title}
                description={frontMatter.description}
            />

            <HeaderSection>
                <div className="above-title">
                    <Link href="/projects">
                        <BackHoverLink href="/projects">Projects</BackHoverLink>
                    </Link>
                </div>
                <TitleContainer>
                    <Title1>{frontMatter.title}</Title1>
                </TitleContainer>
                <Metadata className="metadata">
                    {frontMatter.topics && (
                        <span style={{ textTransform: "capitalize" }}>
                            {frontMatter.topics}
                        </span>
                    )}
                    <EvergreenIcon width="14" height="14" />
                    {frontMatter.updated && (
                        <span>{formattedDate(frontMatter.updated)}</span>
                    )}
                </Metadata>
            </HeaderSection>
            <StyledMain>
                <BackToTop />
                <ProseWrapper>
                    <MDXRemote {...source} components={components} />
                </ProseWrapper>
            </StyledMain>
            <TwitterReply
                url={`https://maggieappleton.com/${slug}/`}
                title={frontMatter.title}
            />
        </>
    );
}

const TitleContainer = styled.div`
    padding: var(--space-16) 0 var(--space-8);
    p {
        font-size: var(--font-size-md);
        margin: var(--space-24) 0 0 0;
        color: var(--color-gray-600);
    }
`;

const HeaderSection = styled.header`
    max-width: 800px;
    margin: var(--space-24) auto 0;
    div.above-title {
        a,
        p {
            display: inline-block;
            font-family: var(--font-sans);
            font-size: var(--font-size-xs);
            text-transform: uppercase;
            letter-spacing: 0.05em;
            font-weight: bold;
            padding-right: var(--space-16);
        }
        p {
            padding-left: var(--space-12);
        }
        svg {
            position: relative;
            top: 3px;
        }
    }

    @media ${breakpoints.mediaSM} {
        padding: 0 var(--space-16);
    }
`;

const Metadata = styled.div`
    display: flex;
    grid-gap: var(--space-8);
    align-items: center;
`;

const StyledMain = styled.main`
    margin-top: var(--space-16);
    padding: var(--space-64) 0;
    background: linear-gradient(var(--color-cream) 0, white 110px);
    grid-column: 1/4 !important;
    width: 100%;
    @media ${breakpoints.mediaSM} {
        padding: var(--space-32) var(--space-16);
    }
`;
