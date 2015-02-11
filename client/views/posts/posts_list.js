var postsData = [
	{
		title: 'Introducing Telescope',
		author: 'Sacha Greif',
		url: 'http://sachagreif.com/Introducing-telescope/'
	},
	{
		title: 'Meteor',
		author: 'Tom Coleman',
		url: 'http://Meteor.com'
	},
	{
		title: 'The Meteor Book',
		author: 'Tom Coleman',
		url: 'http://themeteorbook.com'
	}
];

Template.postsList.helpers({
	posts: postsData
});

