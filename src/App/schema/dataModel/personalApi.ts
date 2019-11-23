export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

/** My blog photos */
export type Blog = {
   __typename?: 'Blog',
  /** All of the avalible photos */
  photos?: Maybe<Array<Maybe<Photo>>>,
  /** My Photo Blog's URL */
  url?: Maybe<Scalars['String']>,
};


/** My blog photos */
export type BlogPhotosArgs = {
  limit?: Maybe<Scalars['Int']>
};

/** An item on most played chart */
export type ChartItem = {
   __typename?: 'chartItem',
  /** The item name, dependent on what kind of query (either album or song) */
  name?: Maybe<Scalars['String']>,
  /** The artist for the song or album */
  artist?: Maybe<Scalars['String']>,
  /** How many times the item has been played in the given time period */
  playcount?: Maybe<Scalars['Int']>,
};

/** A Commit I've done */
export type Commit = {
   __typename?: 'Commit',
  /** The Repository Url */
  url?: Maybe<Scalars['String']>,
  /** Should be me always */
  author?: Maybe<Scalars['String']>,
  /** The Repository name with branch */
  name?: Maybe<Scalars['String']>,
  /** When the commit occured */
  time?: Maybe<Scalars['String']>,
  /** When the commit occured, relatively */
  reltime?: Maybe<Scalars['String']>,
  /** What the commit said */
  message?: Maybe<Scalars['String']>,
};

/** My Github Info */
export type Github = {
   __typename?: 'Github',
  /** The Company's Name */
  commits?: Maybe<Array<Maybe<Commit>>>,
  /** My Github URL */
  url?: Maybe<Scalars['String']>,
};


/** My Github Info */
export type GithubCommitsArgs = {
  limit?: Maybe<Scalars['Int']>
};

/** A Job I've done */
export type Job = {
   __typename?: 'Job',
  /** The Company's Name */
  company?: Maybe<Scalars['String']>,
  /** What My Title Was */
  title?: Maybe<Scalars['String']>,
  /** When I had the job */
  when?: Maybe<Timespan>,
  /** More About the Job */
  details?: Maybe<Array<Maybe<Scalars['String']>>>,
};

/** My Github Info */
export type LastFm = {
   __typename?: 'LastFM',
  /** My most played songs */
  mostPlayedTracks?: Maybe<Array<Maybe<ChartItem>>>,
  /** My most played artists */
  mostPlayedArtists?: Maybe<Array<Maybe<ChartItem>>>,
  /** My most played albums */
  mostPlayedAlbums?: Maybe<Array<Maybe<ChartItem>>>,
  /** A Song I listened to */
  recentSongs?: Maybe<Array<Maybe<Song>>>,
  /** What's playing right now */
  nowplaying?: Maybe<Song>,
  /** My Last.FM url */
  url?: Maybe<Scalars['String']>,
};


/** My Github Info */
export type LastFmMostPlayedTracksArgs = {
  limit?: Maybe<Scalars['Int']>,
  period?: Maybe<Period>
};


/** My Github Info */
export type LastFmMostPlayedArtistsArgs = {
  limit?: Maybe<Scalars['Int']>,
  period?: Maybe<Period>
};


/** My Github Info */
export type LastFmMostPlayedAlbumsArgs = {
  limit?: Maybe<Scalars['Int']>,
  period?: Maybe<Period>
};


/** My Github Info */
export type LastFmRecentSongsArgs = {
  limit?: Maybe<Scalars['Int']>
};

/** My Linkedin Info */
export type Linkedin = {
   __typename?: 'Linkedin',
  /** My LinkedIn URL */
  url?: Maybe<Scalars['String']>,
};

/** About Me */
export type Me = {
   __typename?: 'Me',
  /** My Name */
  name?: Maybe<Scalars['String']>,
  /** A photo of me */
  photo?: Maybe<Scalars['String']>,
  /** My LinkedIn Info */
  linkedin?: Maybe<Linkedin>,
  /** My Email Address */
  email?: Maybe<Scalars['String']>,
  /** Do I Have A Job? */
  employed?: Maybe<Scalars['Boolean']>,
  /** A Little About Me */
  bio?: Maybe<Scalars['String']>,
  /** What I'm Interested In */
  interests?: Maybe<Scalars['String']>,
  /** My Resume */
  resume?: Maybe<Resume>,
  /** Some Recent Projects */
  projects?: Maybe<Array<Maybe<Project>>>,
  /** My Recent Jobs */
  jobs?: Maybe<Array<Maybe<Job>>>,
  /** Possible Relevant Skills */
  skills?: Maybe<Array<Maybe<Skills>>>,
  /** My Twitter Info */
  twitter?: Maybe<Twitter>,
  /** My Github Info */
  github?: Maybe<Github>,
  /** My Last.FM info */
  lastfm?: Maybe<LastFm>,
  /** My Photo Blog info */
  photoBlog?: Maybe<Blog>,
};


/** About Me */
export type MeProjectsArgs = {
  limit?: Maybe<Scalars['Int']>
};


/** About Me */
export type MeJobsArgs = {
  limit?: Maybe<Scalars['Int']>
};

export enum Period {
  Overall = 'overall',
  Week = 'week',
  Month = 'month',
  ThreeMonth = 'threeMonth',
  SixMonth = 'sixMonth',
  Year = 'year'
}

/** A Photo from my blog */
export type Photo = {
   __typename?: 'Photo',
  /** The Photo Title */
  title?: Maybe<Scalars['String']>,
  /** The photo html */
  html?: Maybe<Scalars['String']>,
  /** The photo source */
  photo?: Maybe<Scalars['String']>,
  /** a link to the post */
  url?: Maybe<Scalars['String']>,
};

/** A Project I've done */
export type Project = {
   __typename?: 'Project',
  /** The Project's Name */
  name?: Maybe<Scalars['String']>,
  /** What The Project Is */
  description?: Maybe<Scalars['String']>,
  /** Where You Can See The Source Code */
  github?: Maybe<Scalars['String']>,
  /** Where You Can See It */
  website?: Maybe<Scalars['String']>,
  /** What Technologies I Used */
  technologies?: Maybe<Array<Maybe<Scalars['String']>>>,
};

/** Versions of my Resume */
export type Resume = {
   __typename?: 'Resume',
  /** Resume in pdf format */
  pdf?: Maybe<Scalars['String']>,
  /** Resume in docx format */
  docx?: Maybe<Scalars['String']>,
};

/** Some Relevant Skills */
export type Skills = {
   __typename?: 'Skills',
  /** The skill category */
  category?: Maybe<Scalars['String']>,
  /** The skills */
  types?: Maybe<Array<Maybe<Scalars['String']>>>,
};

/** A Song I've Listened To */
export type Song = {
   __typename?: 'Song',
  /** The Song Name */
  title?: Maybe<Scalars['String']>,
  /** Whether the song is currently playing */
  nowplaying?: Maybe<Scalars['Boolean']>,
  /** The Artist Name */
  artist?: Maybe<Scalars['String']>,
};

/** a timespan */
export type Timespan = {
   __typename?: 'Timespan',
  /** the start date */
  start?: Maybe<Scalars['String']>,
  /** the end date */
  end?: Maybe<Scalars['String']>,
};

/** A Tweet I've Tweeted */
export type Tweet = {
   __typename?: 'Tweet',
  /** The Tweet Text */
  message?: Maybe<Scalars['String']>,
  /** When the tweet was tweeted */
  time?: Maybe<Scalars['String']>,
  /** When the tweet was tweeted, relatively */
  reltime?: Maybe<Scalars['String']>,
  /** The Tweet Permalink */
  url?: Maybe<Scalars['String']>,
};

/** My Twitter Info */
export type Twitter = {
   __typename?: 'Twitter',
  /** My recent tweets */
  tweets?: Maybe<Array<Maybe<Tweet>>>,
  /** My Twitter url */
  url?: Maybe<Scalars['String']>,
};


/** My Twitter Info */
export type TwitterTweetsArgs = {
  limit?: Maybe<Scalars['Int']>
};
