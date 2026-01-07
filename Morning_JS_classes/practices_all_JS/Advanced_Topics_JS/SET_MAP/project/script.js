// 1️⃣ Select DOM elements
const teamInput = document.getElementById('teamInput');   // Input for team name
const memberInput = document.getElementById('memberInput'); // Input for member name
const skillInput = document.getElementById('skillInput');   // Input for skill
const addMemberBtn = document.getElementById('addMemberBtn'); // Button to add member
const memberList = document.getElementById('memberList');   // Display members
const skillList = document.getElementById('skillList');     // Display skill Map
const teamCount = document.getElementById('teamCount');     // Total teams

// 2️⃣ Map to store each team and its members (teamName -> Set of members)
const teamMembers = new Map();

// 3️⃣ Map to store each member's skills (memberName -> Map(skill -> score))
const memberSkills = new Map();

// 4️⃣ Update member list display
function updateMemberList() {
  memberList.innerHTML = ''; // Clear previous list

  teamMembers.forEach((members, team) => { // Iterate teams
    members.forEach(member => { // Iterate members in Set
      const li = document.createElement('li'); 
      li.textContent = `Team: ${team}, Member: ${member}`; // Display member info

      // Remove member button
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.onclick = () => {
        members.delete(member);        // Remove member from Set
        memberSkills.delete(member);   // Remove member's skills Map
        updateMemberList();            // Refresh list
        updateSkillList();             // Refresh skills display
      };

      li.appendChild(removeBtn);
      memberList.appendChild(li);
    });
  });

  teamCount.textContent = teamMembers.size; // Update total teams
}

// 5️⃣ Update skill list display
function updateSkillList() {
  skillList.innerHTML = ''; // Clear previous list

  memberSkills.forEach((skills, member) => { // Iterate each member
    skills.forEach((score, skill) => {       // Iterate each skill Map
      const li = document.createElement('li');
      li.textContent = `Member: ${member}, Skill: ${skill}, Score: ${score}`;
      skillList.appendChild(li);
    });
  });
}

// 6️⃣ Add member functionality
addMemberBtn.addEventListener('click', () => {
  const team = teamInput.value.trim();     // Get team name
  const member = memberInput.value.trim(); // Get member name
  const skill = skillInput.value.trim();   // Get skill name

  if (!team || !member || !skill) {        // Validate inputs
    alert('Please enter Team, Member, and Skill');
    return;
  }

  // Initialize team Set if not exists
  if (!teamMembers.has(team)) {
    teamMembers.set(team, new Set()); // Set ensures unique members
  }

  const members = teamMembers.get(team); // Get team's Set

  if (members.has(member)) {
    alert('Member already exists in this team!'); // Prevent duplicate member
  } else {
    members.add(member); // Add member to team's Set
  }

  // Initialize member's skill Map if not exists
  if (!memberSkills.has(member)) {
    memberSkills.set(member, new Map()); // Map for skill -> score
  }

  const skills = memberSkills.get(member); // Get member's skill Map

  if (skills.has(skill)) {
    alert('Skill already added for this member!'); // Prevent duplicate skill
  } else {
    const score = Math.floor(Math.random() * 101); // Random score for demo
    skills.set(skill, score); // Set skill -> score
  }

  // Refresh displays
  updateMemberList();
  updateSkillList();

  // Clear input fields
  teamInput.value = '';
  memberInput.value = '';
  skillInput.value = '';
});

// 7️⃣ Optional: Add Enter key functionality for convenience
[teamInput, memberInput, skillInput].forEach(input => {
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addMemberBtn.click();
  });
});
