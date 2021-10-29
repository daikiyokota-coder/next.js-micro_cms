import { BoxProps, Box, Text, UnorderedList, ListItem, Link } from '@chakra-ui/react';
// import Markdown from 'markdown-to-jsx';
// import { htmlToMarkdown } from '../utils/posts';
import parse, { domToReact, HTMLReactParserOptions} from 'html-react-parser';
import highlight from 'highlight.js';
import 'highlight.js/styles/night-owl.css';


// const ChakraMarkdown = chakra(Markdown);

const headingStyle = {
  mt: '10',
  mb: '6',
  fontWeight: 'semibold',
};
const borderBottomStyle = {
  pb: '1',
  borderBottom: '2px',
  borderBottomColor: 'gray.200',
};

const h1 = {
  component: Text,
  props: {
    ...headingStyle,
    ...borderBottomStyle,
    fontSize: '3xl',
  },
};

const h2 = {
  component: Text,
  props: {
    ...headingStyle,
    fontSize: '2xl',
  },
};

const h3 = {
  component: Text,
  props: {
    ...headingStyle,
    fontSize: 'xl',
  },
};

const p = {
  component: Text,
  props: {
    lineHeight: '180%',
    mb: '6',
  },
};

const code = {
  component: Box,
  props: {
    fontSize: 'sm',
    p: '4',
    mb: '6',
  },
};

// const ul = {
//   component: UnorderedList,
// };

// const li = {
//   component: ListItem,
// };

const blockquote = {
  component: Box,
  props: {
    borderLeft: '2px',
    pl: '4',
    mb: '6',
    color: 'gray.500',
  },
};

const a = {
  component: Link,
  props: {
    isExternal: true,
    textDecoration: 'underline',
  },
};

const languageSubset = ['js', 'html', 'css', 'xml', 'typescript'];

const options = {
  replace: domNode => {
    if (domNode.type === 'tag') {
      if (domNode.name === 'h1') {
        return (
          <Text as="h1" {...h1.props}>
            {domToReact(domNode.children, options)}
          </Text>
        );
      }
      if (domNode.name === 'h2') {
        return (
          <Text as="h2" {...h2.props}>
            {domToReact(domNode.children, options)}
          </Text>
        );
      }
      if (domNode.name === 'h3') {
        return (
          <Text as="h3" {...h3.props}>
            {domToReact(domNode.children, options)}
          </Text>
        );
      }
      if (domNode.name === 'ul') {
        return <UnorderedList>{domToReact(domNode.children, options)}</UnorderedList>;
      }
      if (domNode.name === 'li') {
        return <ListItem>{domToReact(domNode.children, options)}</ListItem>;
      }
      if (domNode.name === 'blockquote') {
        return (
          <Box as="blockquote" {...blockquote.props}>
            {domToReact(domNode.children, options)}
          </Box>
        );
      }
      if (domNode.name === 'code') {
        const highlightCode = highlight.highlightAuto(
          domToReact(domNode.children),
          languageSubset,
        ).value;
        return (
          <Box as="code" className="hljs" {...code.props}>
            {parse(highlightCode)}
          </Box>
        );
      }
      if (domNode.name === 'a') {
        return (
          <Link {...a.props} href={domNode.attribs.href}>
            {domToReact(domNode.children, options)}
          </Link>
        );
      }
      if (domNode.name === 'p') {
        return <Text {...p.props} >{domToReact(domNode.children, options)}</Text>;
      }
    }
  },
};

export default function MarkdownTemplate(props) {
  console.log(props)
  return (
    
    <Box {...props}>{parse(props.source, options)}</Box>
    // <ChakraMarkdown
    //   lineHeight="tall"
    //   options={{
    //     wrapper: 'article',
    //     overrides: {
    //       h1,
    //       h2,
    //       h3,
    //       p,
    //       ul,
    //       li,
    //       blockquote,
    //       a,
    //     },
    //   }}
    //   {...props}
    // >
    //   {props.source}
    // </ChakraMarkdown>
  );
};
