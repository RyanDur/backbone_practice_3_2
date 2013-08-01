describe('repos', function() {
  var repos, data, sortedData;

  beforeEach(function() {
    sortedData = ['Project_Euler', 'jquery-practice', 'ActiveRecordPractice', 'rackPractice', 'JavascriptPractice', 
                      'Angular_Practice', 'my_emacs', 'JC_Angular', 'Patu', 'LearninWithMyCoach'];

    data = getJSONFixture('git.json');
    repos = new Bbprac32.Collections.Repos(data);
  });

  it('should sort the data by updated_at', function() {
    repos.each(function(repo, index) {
      expect(repo.get('name')).toEqual(sortedData[index]);
    });
  });
});
