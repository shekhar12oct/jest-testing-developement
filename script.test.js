const googleSearch=require('./script');

dbMock=[
    'dog.com',
    'cheesepuff.com',
    'disney.com',
    'dogpictures.com'

]

it("test",()=>{
  expect(googleSearch('test',dbMock)).toEqual([]);
  expect(googleSearch('dog',dbMock)).toEqual(['dog.com','dogpictures.com']);
});