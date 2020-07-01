describe "User visits the Home Page" do
  it "and sees 'Remembery' in the top bar" do
    visit '/'
    expect(page).to have_content 'Remembery'
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
