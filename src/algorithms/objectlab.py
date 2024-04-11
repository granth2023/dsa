from datetime import datetime

# Define album1
album1 = {
  'title': 'Talking Heads',
  'albumDetails': {
    'released': datetime(1977, 9, 16),
    'label': 'Sire',
    'formats': ['LP']
  }
}

# Exercise 1: Update the title property of album1 from 'Talking Heads' to 'Talking Heads - 77', then assign that property to a variable named title
album1['title'] = 'Taking Head - 77'
title = album1['title']
print (title)

# Exercise 2: Assign the string 'Sire' from album1 to a variable named label

# Define album2
album2 = {
  'title': 'More Songs About Buildings and Food',
  'albumDetails': {
    'released': datetime(1978, 7, 14),
    'label': 'Sire',
    'formats': ['LP', '8-track']
  }
}

album2['albumDetails']['lablel'] = 'Sire'
label = album2['albumDetails']['lablel']
print (label)

# Define album3
album3 = {
  'title': 'Fear of Music',
  'albumDetails': {
    'released': 'August 3, 1979',  # This will be updated to a datetime object in Exercise 4
    'label': 'Sire',
    'formats': ['Cassette']
  }
}

# Exercise 3: Accessing the string 'LP' from album2's formats array, add it to the end of album3's formats array.
album3['albumDetails']['formats'].append('LP')
time = album3['albumDetails']['formats']
print (time)
 
# Exercise 4: Update the released property of album3 from a string into a Date object using that string

# Define album4
album4 = {
  'title': 'Remain in Light',
  'albumDetails': {
    'released': datetime(1980, 10, 8),
    'formats': ['Cassette', 'LP']
  }
}

album3['albumDetails']['released'] = datetime.strptime(album3['albumDetails']['released'], '%B %d, %Y')
print (album3['albumDetails']['released'])

# Exercise 5: Add a property named label with the value 'Sire' to album4's albumDetails property

# Define album5
album5 = {
  'title': 'Little Creatures',
  'albumDetails': {
    'released': datetime(1985, 6, 10),
    'labels': ['Sire', 'emi'],
    'formats': ['CD', 'cassette', 'LP']
  }
}
album4['albumDetails']['label'] = 'Sire'
print (album4['albumDetails']['label'])

# Exercise 6: Update the value 'emi' within album5's labels array to 'EMI'

# Define album6
album6 = {
  'title': 'True Stories',
  'albumDetails': {
    'released': datetime(1986, 10, 7),
    'labels': ['Sire, EMI'],
    'formats': ['CD', 'cassette', 'LP']
  }
}
album5['albumDetails']['labels'][1] = 'EMI'
print (album5['albumDetails']['labels'])
# Exercise 7: Assign album6's formats array to a variable named formats

# Define album7
album7 = {
  'title': 'Naked',
  'albumDetails': {
    'released': datetime(1988, 3, 15),
    'labels': ['Sire', 'EMI'],
    'formats': ['CD', 'cassette', 'LP']
  }
}
formats = album6['albumDetails']['formats']
print(formats)
# Create a list of albums
talkingHeadsAlbums = [album1, album2, album3, album4, album5, album6, album7]

# Exercise 8: Using the talkingHeadsAlbums array, assign album5's labels property to a variable named labels
labels = talkingHeadsAlbums[4]['albumDetails']['labels']
print (labels)
# Exercise 9: Using the talkingHeadsAlbums array, assign album7's released property to album6's released property
property = talkingHeadsAlbums[6]['albumDetails']['released']
print (property)
# Exercise 10: Using the pre-defined variable named albumIdx below, assign the albumDetails object of the album located within the talkingHeadsAlbums array at the index represented by the value of albumIdx to a variable named albumDetails

albumIdx = 4

albumDetails = talkingHeadsAlbums[albumIdx]['albumDetails']

print(albumDetails)