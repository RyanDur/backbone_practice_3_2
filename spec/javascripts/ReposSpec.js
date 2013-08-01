describe('repos', function() {
  var server, repos;

  beforeEach(function() {
    var response = getJSONFixture('git.json');
    server = sinon.fakeServer.create();

    server.respondWith(
      "GET",
      "/api/repos",
      [
        200,
        {"Content-Type": "application/json"},
        JSON.stringify(response)
      ]
    );

    repos = new Bbprac32.Collections.Repos();
    repos.fetch();
    server.respond();
  });

  afterEach(function() {
    server.restore();
  });

  it('should sort the data by updated_at', function() {
    var sortedData = ['Project_Euler' ,'jquery-practice', 'ActiveRecordPractice', 'rackPractice', 'JavascriptPractice', 
                      'Angular_Practice', 'my_emacs', 'JC_Angular', 'Patu', 'LearninWithMyCoach'];

    expect(repos.length).toEqual(10);
    repos.each(function(repo, index) {
      expect(repo.get('name')).toEqual(sortedData[index])
    });
  });
});
