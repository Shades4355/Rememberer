describe "User visits the Home Page" do
  it "and sees 'Rememberer' in the top bar" do
    visit '/'
    expect(page).to have_content 'Rememberer'
  end

  it "and sees 'Sign In' in the top bar" do
    visit '/'
    expect(page).to have_content 'Sign In'
  end

  it "and sees 'loading...' until the React componant mounts" do
    visit '/'
    expect(page).to have_content 'loading...'
  end
end
