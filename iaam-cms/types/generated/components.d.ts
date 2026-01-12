import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsAboutCards extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_cards';
  info: {
    displayName: 'about_cards';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SectionsAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_sections';
  info: {
    displayName: 'aboutSection';
  };
  attributes: {
    about_cards: Schema.Attribute.Component<'sections.about-cards', true>;
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsAssociationAbout extends Struct.ComponentSchema {
  collectionName: 'components_sections_association_abouts';
  info: {
    displayName: 'associationAbout';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    paragraph1: Schema.Attribute.Blocks;
    paragraph2: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SectionsAssociationGlobalImpact
  extends Struct.ComponentSchema {
  collectionName: 'components_sections_association_global_impacts';
  info: {
    displayName: 'AssociationGlobalImpact';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    impactIntro: Schema.Attribute.String;
    ImpactPoint: Schema.Attribute.Component<'sections.impact-point', true>;
    impactTitle: Schema.Attribute.String;
    sectionSubtitle: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface SectionsAssociationOurRole extends Struct.ComponentSchema {
  collectionName: 'components_sections_association_our_roles';
  info: {
    displayName: 'AssociationOurRole';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsAssociationVisionMission
  extends Struct.ComponentSchema {
  collectionName: 'components_sections_association_vision_missions';
  info: {
    displayName: 'AssociationVisionMission';
  };
  attributes: {
    missionIntro: Schema.Attribute.String;
    MissionPoint: Schema.Attribute.Component<'sections.mission-points', true>;
    missionTitle: Schema.Attribute.String;
    sectionSubtitle: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
    visionDescription: Schema.Attribute.Blocks;
    visionTitle: Schema.Attribute.String;
  };
}

export interface SectionsCards extends Struct.ComponentSchema {
  collectionName: 'components_sections_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['primary', 'light']>;
  };
}

export interface SectionsEvents extends Struct.ComponentSchema {
  collectionName: 'components_sections_events';
  info: {
    displayName: 'events';
  };
  attributes: {
    day: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    month: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsEventsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_events_sections';
  info: {
    displayName: 'eventsSection';
  };
  attributes: {
    events: Schema.Attribute.Component<'sections.events', true>;
    leftSubmit: Schema.Attribute.Component<'sections.left-submit', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_sections';
  info: {
    displayName: 'heroSection';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsImpactPoint extends Struct.ComponentSchema {
  collectionName: 'components_sections_impact_points';
  info: {
    displayName: 'ImpactPoint';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SectionsJoinSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_join_sections';
  info: {
    displayName: 'joinSection';
  };
  attributes: {
    cards: Schema.Attribute.Component<'sections.cards', true>;
    description: Schema.Attribute.Blocks;
    leftCard: Schema.Attribute.Component<'sections.left-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsLeftCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_left_cards';
  info: {
    displayName: 'leftCard';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsLeftSubmit extends Struct.ComponentSchema {
  collectionName: 'components_sections_left_submits';
  info: {
    displayName: 'leftSubmit';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    paragraph1: Schema.Attribute.Text;
    paragraph2: Schema.Attribute.Text;
    primaryButtonLink: Schema.Attribute.String;
    primaryButtonText: Schema.Attribute.String;
    secondaryButtonLink: Schema.Attribute.String;
    secondaryButtonText: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsLeftSummit extends Struct.ComponentSchema {
  collectionName: 'components_sections_left_summits';
  info: {
    displayName: 'leftSummit';
  };
  attributes: {};
}

export interface SectionsMissionPoints extends Struct.ComponentSchema {
  collectionName: 'components_sections_mission_points';
  info: {
    displayName: 'missionPoints';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SectionsNewsItems extends Struct.ComponentSchema {
  collectionName: 'components_sections_news_items';
  info: {
    displayName: 'newsItems';
  };
  attributes: {
    date: Schema.Attribute.DateTime;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsNewsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_news_sections';
  info: {
    displayName: 'newsSection';
  };
  attributes: {
    allArticlesLink: Schema.Attribute.String;
    allArticlesText: Schema.Attribute.Blocks;
    featuredDescription: Schema.Attribute.Blocks;
    featuredImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    featuredTitle: Schema.Attribute.String;
    newsItems: Schema.Attribute.Component<'sections.news-items', true>;
    newsletterButtonLink: Schema.Attribute.String;
    newsletterButtonText: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.about-cards': SectionsAboutCards;
      'sections.about-section': SectionsAboutSection;
      'sections.association-about': SectionsAssociationAbout;
      'sections.association-global-impact': SectionsAssociationGlobalImpact;
      'sections.association-our-role': SectionsAssociationOurRole;
      'sections.association-vision-mission': SectionsAssociationVisionMission;
      'sections.cards': SectionsCards;
      'sections.events': SectionsEvents;
      'sections.events-section': SectionsEventsSection;
      'sections.hero': SectionsHero;
      'sections.hero-section': SectionsHeroSection;
      'sections.impact-point': SectionsImpactPoint;
      'sections.join-section': SectionsJoinSection;
      'sections.left-card': SectionsLeftCard;
      'sections.left-submit': SectionsLeftSubmit;
      'sections.left-summit': SectionsLeftSummit;
      'sections.mission-points': SectionsMissionPoints;
      'sections.news-items': SectionsNewsItems;
      'sections.news-section': SectionsNewsSection;
    }
  }
}
