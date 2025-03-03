import React, { ReactNode } from 'react';
import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
} from '@mui/material';
import {
  Favorite,
  Share,
  MoreVert as MoreVertIcon,
  Comment as CommentIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Advertisement from './Advertisement';

const CyberCard = styled(Card)({
  backgroundColor: 'rgba(20, 20, 50, 0.8)',
  borderRadius: '12px',
  border: '1px solid #00f2ff',
  marginBottom: '20px',
  boxShadow: '0 0 10px rgba(0, 242, 255, 0.2)',
  '&:hover': {
    boxShadow: '0 0 20px rgba(0, 242, 255, 0.4)',
  },
});

// Sample ads data
const advertisements = [
  {
    type: 'sponsored' as const,
    data: {
      title: 'नई साइबरपंक स्मार्टवॉच',
      description: 'भविष्य की तकनीक अब आपकी कलाई पर। LED डिस्प्ले के साथ नेओन लाइट्स और स्मार्ट फीचर्स।',
      imageUrl: 'https://source.unsplash.com/random/800x600/?smartwatch,cyberpunk',
      advertiser: 'टेक्नो गैजेट्स',
      link: 'https://example.com/smartwatch',
      price: '₹4,999',
    },
  },
  {
    type: 'adsense' as const,
    data: {
      title: 'गेमिंग लैपटॉप मेगा सेल',
      description: '50% तक की छूट! RGB कीबोर्ड और RTX 4060 के साथ अल्टिमेट गेमिंग एक्सपीरियंस।',
      imageUrl: 'https://source.unsplash.com/random/800x600/?gaming,laptop',
      advertiser: 'गेमर्स पैराडाइज',
      link: 'https://example.com/gaming-laptop',
      price: '₹89,999 से शुरू',
    },
  },
];

const posts = [
  {
    id: 1,
    author: 'CyberRunner',
    avatar: 'C',
    date: 'March 3, 2024',
    content: 'Just hacked into the mainframe. The neon lights are beautiful tonight! 🌆',
    image: 'https://source.unsplash.com/random/800x600/?cyberpunk',
    likes: 423,
    comments: 89,
  },
  {
    id: 2,
    author: 'NeonBlade',
    avatar: 'N',
    date: 'March 3, 2024',
    content: 'New augmentations installed. Feeling more powerful than ever! 💪',
    image: 'https://source.unsplash.com/random/800x600/?neon',
    likes: 756,
    comments: 124,
  },
];

const Feed = () => {
  // Function to insert ads between posts
  const getContentWithAds = () => {
    const content: React.ReactElement[] = [];
    posts.forEach((post, index) => {
      content.push(
        <CyberCard key={post.id}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: '#00f2ff', color: '#0a0a1f' }}>
                {post.avatar}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon sx={{ color: '#00f2ff' }} />
              </IconButton>
            }
            title={
              <Typography sx={{ color: '#00f2ff', fontWeight: 'bold' }}>
                {post.author}
              </Typography>
            }
            subheader={
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                {post.date}
              </Typography>
            }
          />
          <CardMedia
            component="img"
            height="400"
            image={post.image}
            alt="Post image"
            sx={{ objectFit: 'cover' }}
          />
          <CardContent>
            <Typography variant="body1" sx={{ color: '#ffffff' }}>
              {post.content}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="like">
              <Favorite sx={{ color: '#00f2ff' }} />
            </IconButton>
            <Typography sx={{ color: '#ffffff' }}>{post.likes}</Typography>
            <IconButton aria-label="comment">
              <CommentIcon sx={{ color: '#00f2ff' }} />
            </IconButton>
            <Typography sx={{ color: '#ffffff' }}>{post.comments}</Typography>
            <IconButton aria-label="share">
              <Share sx={{ color: '#00f2ff' }} />
            </IconButton>
          </CardActions>
        </CyberCard>
      );

      // Add advertisement after every post (except the last one)
      if (index < posts.length - 1 && advertisements[index]) {
        content.push(
          <Advertisement
            key={`ad-${index}`}
            type={advertisements[index].type}
            data={advertisements[index].data}
          />
        );
      }
    });
    return content;
  };

  return (
    <Box flex={4} p={2}>
      {getContentWithAds()}
    </Box>
  );
};

export default Feed; 