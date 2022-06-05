import { Navigator } from ".";
import { External } from ".";
import { Content } from ".";
import { Divider } from ".";
import { Vertex } from ".";
import { Global } from ".";
import { Panel } from ".";
import { Item } from ".";
import { List } from ".";

import "./index.scss";

/***
 * Consider Adding breakpoint (@media (min-width: 1320px)) for Menu Panels
 */
export module Component {
    export const Menu = (context) => {
        console.log("Context", context);
        return (
            <Navigator>
                <Global prefix={ process.env["REACT_APP_NAME"] } title={ process.env["REACT_APP_SUFFIX"] } reload={ false }/>
                <Item title={ "Settings" } reload={ false }/>
                <Panel title={ "Test-Relative" }/>
                <Panel title={ "Documentation" }>
                    <Content>
                        <Vertex content={ "Changelogs" }>
                            <List name={ "Changelogs" } items={ [
                                { title: "Terraform", link: process.env["REACT_APP_TERRAFORM_LINK"] },
                                { title: "Lambda", link: process.env["REACT_APP_LAMBDA_LINK"] },
                                { title: "Consul", link: process.env["REACT_APP_CONSUL_LINK"] },
                                { title: "Vagrant", link: process.env["REACT_APP_VAGRANT_LINK"] },
                                { title: "Jira", link: process.env["REACT_APP_JIRA_LINK"] },
                                { title: "GitHub", link: process.env["REACT_APP_GITHUB_LINK"] },
                                { title: "GitLab", link: process.env["REACT_APP_GITLAB_LINK"] }
                            ] }/>
                        </Vertex>
                        <Vertex content={ "Column-2" }/>
                        <Vertex content={ "Column-3" }/>
                        <Divider content={ "External Reference(s)" }>
                            <External>
                                <List name={ "Changelogs" } items={ [
                                    { title: "Terraform", link: process.env["REACT_APP_TERRAFORM_LINK"] },
                                    { title: "Lambda", link: process.env["REACT_APP_LAMBDA_LINK"] },
                                    { title: "Consul", link: process.env["REACT_APP_CONSUL_LINK"] },
                                    { title: "Vagrant", link: process.env["REACT_APP_VAGRANT_LINK"] }
                                ] }/>
                                <List name={ null } items={ [
                                    { title: "Jira", link: process.env["REACT_APP_JIRA_LINK"] },
                                    { title: "GitHub", link: process.env["REACT_APP_GITHUB_LINK"] },
                                    { title: "GitLab", link: process.env["REACT_APP_GITLAB_LINK"] }
                                ] }/>
                            </External>
                        </Divider>
                    </Content>
                </Panel>
                <Item title={ "Mobile-Preview" } overwrite={ "mobile-preview" } reload={ false }/>
                <Item title={ "Documentation" } reload={ false }/>
            </Navigator>
        );
    };
}

export default Menu;
export const { Menu } = Component;
