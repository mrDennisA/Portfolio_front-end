export const ABOUT_PAGE = `
{
  about {
    data {
      attributes {
        title
        richText
        cover {
          data {
            id
            attributes {
              formats
              url
              width
              height
              alternativeText
            }
          }
        }
      }
    }
  }
}
`;

export const SKILL_TYPES = `
  {
    skillTypes {
      data {
        id
        attributes {
          skills {
            data {
              id
              attributes {
                title
              }
            }
          }
        }
      }
    }
  }
`;

export const EXPERIENCES = `
  {
    experiences {
      data {
        attributes {
          card {
            id
            title
            description
            fromDate
            toDate
          }
        }
      }
    }
  }
`;

export const EDUCATIONS = `
  {
    educations {
      data {
        attributes {
          card {
            id
            title
            description
            fromDate
            toDate
          }
        }
      }
    }
  }
`;
