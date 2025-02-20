import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Container, 
  Paper, 
  Avatar, 
  Grid, 
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Card,
  CardContent,
  Button
} from '@mui/material';
import { styled } from '@mui/system';
import { 
  Psychology as PsychologyIcon,
  CheckCircle as CheckCircleIcon,
  Token as TokenIcon,
  Language as LanguageIcon,
  Category as CategoryIcon,
  Compare as CompareIcon,
  InsertChart as InsertChartIcon,
  AutoFixHigh as AutoFixHighIcon,
  ArrowBack as ArrowBackIcon,
  FindInPage as FindInPageIcon,
  Fingerprint as FingerprintIcon,
  Transform as TransformIcon
} from '@mui/icons-material';

const DetailPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  borderRadius: '20px',
  maxWidth: '1000px',
  margin: 'auto',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
}));

const SkillChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  fontSize: '0.9rem',
  fontWeight: 500,
}));

const ProjectCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const StyledBackButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(1.5, 4),
  fontSize: '1.1rem',
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const NLPSkillDetail = () => {
  const navigate = useNavigate();

  const technologies = [
    "spaCy", "Natural Language Processing", "Tokenization", "Named Entity Recognition",
    "Part-of-Speech Tagging", "Dependency Parsing", "Text Classification",
    "Sentiment Analysis", "Language Detection", "Text Preprocessing",
    "Custom Pipeline Components", "Multi-language Support"
  ];

  const projects = [
    {
      title: "Intelligent Document Analysis System",
      description: "Built an advanced document processing system with named entity recognition and key information extraction.",
      technologies: ["spaCy", "Custom NER", "Pattern Matching", "Knowledge Base"],
      icon: <FindInPageIcon />
    },
    {
      title: "Multilingual Sentiment Analyzer",
      description: "Developed a sentiment analysis system supporting multiple languages with custom pipeline components.",
      technologies: ["spaCy", "Text Classification", "Multi-language", "Custom Pipelines"],
      icon: <LanguageIcon />
    },
    {
      title: "Entity Relationship Mapper",
      description: "Created a system to extract and visualize relationships between entities in large text corpora.",
      technologies: ["spaCy", "NetworkX", "Entity Linking", "Visualization"],
      icon: <CompareIcon />
    }
  ];

  const keyFeatures = [
    {
      title: "Advanced Tokenization",
      description: "Precise text segmentation into meaningful tokens with support for multiple languages and custom rules.",
      icon: <TokenIcon />
    },
    {
      title: "Named Entity Recognition (NER)",
      description: "Identifying and classifying named entities like persons, organizations, locations, and custom entities.",
      icon: <FingerprintIcon />
    },
    {
      title: "Part-of-Speech Analysis",
      description: "Accurate grammatical analysis and tagging of words in context for improved text understanding.",
      icon: <CategoryIcon />
    },
    {
      title: "Dependency Parsing",
      description: "Analyzing grammatical structure and relationships between words in sentences.",
      icon: <CompareIcon />
    },
    {
      title: "Custom Pipeline Components",
      description: "Development of specialized NLP components for domain-specific text processing needs.",
      icon: <AutoFixHighIcon />
    },
    {
      title: "Text Classification",
      description: "Intelligent categorization of text documents using statistical and rule-based approaches.",
      icon: <InsertChartIcon />
    },
    {
      title: "Pattern Matching",
      description: "Flexible rule-based matching system for finding specific phrases and patterns in text.",
      icon: <FindInPageIcon />
    },
    {
      title: "Language Detection",
      description: "Automatic identification of text language and appropriate model selection.",
      icon: <TransformIcon />
    }
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(65deg, #1A237E 30%, #4A148C 90%)',
        py: 10,
      }}
    >
      <Container>
        <DetailPaper elevation={3}>
          {/* Header Section */}
          <Grid container spacing={3} alignItems="center" mb={4}>
            <Grid item xs={12} sm={3}>
              <Avatar 
                sx={{ 
                  bgcolor: '#e8eaf6', 
                  width: 100, 
                  height: 100, 
                  margin: 'auto',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
              >
                <PsychologyIcon color="primary" sx={{ fontSize: 60 }} />
              </Avatar>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Typography variant="h3" gutterBottom fontWeight="bold">
                Natural Language Processing with spaCy
              </Typography>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                Advanced text processing and analysis using spaCy's industrial-strength NLP capabilities.
              </Typography>
              <Box mt={2}>
                <CheckCircleIcon color="primary" />
                <CheckCircleIcon color="primary" />
                <CheckCircleIcon color="primary" />
                <CheckCircleIcon color="primary" />
                <CheckCircleIcon color="primary" />
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4 }} />

          {/* Technologies Section */}
          <Typography variant="h5" gutterBottom fontWeight="500">
            Technologies & Tools
          </Typography>
          <Box mb={4}>
            {technologies.map((tech, index) => (
              <SkillChip
                key={index}
                label={tech}
                icon={<CheckCircleIcon />}
                color="primary"
                variant="outlined"
              />
            ))}
          </Box>

          {/* Key Features Section */}
          <Typography variant="h5" gutterBottom fontWeight="500">
            Key Areas of Expertise
          </Typography>
          <List>
            {keyFeatures.map((feature, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  {feature.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={feature.title}
                  secondary={feature.description}
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItem>
            ))}
          </List>

          {/* Projects Section */}
          <Typography variant="h5" gutterBottom fontWeight="500" mt={4}>
            Featured Projects
          </Typography>
          <Grid container spacing={3}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={4} key={index}>
                <ProjectCard>
                  <CardContent>
                    <Box display="flex" alignItems="center" mb={2}>
                      {project.icon}
                      <Typography variant="h6" ml={1} fontWeight="500">
                        {project.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="textSecondary" mb={2}>
                      {project.description}
                    </Typography>
                    <Box>
                      {project.technologies.map((tech, idx) => (
                        <SkillChip
                          key={idx}
                          label={tech}
                          size="small"
                          variant="outlined"
                          color="secondary"
                        />
                      ))}
                    </Box>
                  </CardContent>
                </ProjectCard>
              </Grid>
            ))}
          </Grid>

          {/* Back Button */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6, pb: 2 }}>
            <StyledBackButton
              startIcon={<ArrowBackIcon />}
              onClick={() => navigate('/React-portfolio#skills')}
              variant="contained"
              size="large"
            >
              Back to Skills Overview
            </StyledBackButton>
          </Box>
        </DetailPaper>
      </Container>
    </Box>
  );
};

export default NLPSkillDetail;